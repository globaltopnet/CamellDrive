const express = require('express');
const mysql = require('mysql2/promise');
const TronWeb = require('tronweb');
const crypto = require('crypto');
const cors = require('cors');
const AWS = require('aws-sdk');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
};

const s3Config = {
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION
};

const s3 = new AWS.S3(s3Config);

const pool = mysql.createPool(dbConfig);

const tronWeb = new TronWeb({
  fullHost: 'https://api.trongrid.io'
});

async function createTronAccount() {
  try {
    const account = await tronWeb.createAccount();
    const privateKey = account.privateKey;
    const address = tronWeb.address.fromPrivateKey(privateKey);
    return {
      address,
      privateKey
    };
  } catch (error) {
    console.error('Error creating the wallet:', error);
    return null;
  }
}

async function addWalletToDatabase(email, address, privateKey, s3FolderName) {
  if (email.length > 255 || address.length > 100 || privateKey.length > 64 || s3FolderName.length > 255) {
    throw new Error('Input data exceeds the schema constraints');
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO Wallets (Email, Address, PrivateKey, S3FolderName) VALUES (?, ?, ?, ?)',
      [email, address, privateKey, s3FolderName]
    );
    console.log('Data inserted:', result.insertId);
  } catch (error) {
    console.error('Error inserting wallet data:', error);
    throw error;
  }
}

async function userExists(email) {
  try {
    const [rows] = await pool.execute(
      'SELECT COUNT(*) AS count FROM Wallets WHERE Email = ?',
      [email]
    );
    const exists = rows[0].count > 0;
    return exists;
  } catch (error) {
    console.error('Error checking user existence:', error);
    throw error;
  }
}

async function createS3Folder(walletAddress) {
  const bucketName = process.env.BUCKET_NAME;
  const folderName = walletAddress + '/';

  const params = {
    Bucket: bucketName,
    Key: folderName
  };

  try {
    await s3.putObject(params).promise();
    console.log(`Folder ${folderName} created in bucket ${bucketName}`);
    return folderName;
  } catch (error) {
    console.error('Error creating S3 folder:', error);
    throw error;
  }
}

app.post('/api/create-wallet', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Missing email' });
  }

  try {
    const exists = await userExists(email);
    if (exists) {
      return res.status(200).json({ success: true, message: 'User already has a wallet' });
    }

    const account = await createTronAccount();
    if (account) {
      const s3FolderName = await createS3Folder(account.address);
      console.log(`S3 Folder Name: ${s3FolderName}`);
      await addWalletToDatabase(email, account.address, account.privateKey, s3FolderName);
      return res.status(200).json({ success: true, walletAddress: account.address });
    } else {
      console.error('Error generating Tron account');
      return res.status(500).json({ success: false, error: 'Error generating wallet' });
    }
  } catch (error) {
    console.error('Error creating wallet:', error);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.get('/api/ping', (req, res) => {
  return res.status(200).json({ success: true, message: 'The server is connected' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
