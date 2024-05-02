const TronWeb = require('tronweb');

const crypto = require('crypto');
const privateKey = crypto.randomBytes(32).toString('hex');

const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    privateKey: privateKey
});

// Function to create a new account
async function createAccount() {
    try {
        const account = await tronWeb.createAccount();
        console.log('Account Address:', account.address.base58);
        console.log('Private Key:', account.privateKey);
    } catch (error) {
        console.error('Error creating the wallet:', error);
    }
}

createAccount();