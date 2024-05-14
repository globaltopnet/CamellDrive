from flask import Flask, jsonify, request
import requests
from decimal import Decimal, InvalidOperation
from tronapi import Tron

app = Flask(__name__)

# TronAPI 설정
tron = Tron()

# 사용할 컨트랙트 주소
contract_address = 'TYLcsgrqJWBwHtQZZYBWoiBx4qgG7t2xSM'

@app.route('/wallet-balance', methods=['GET'])
def wallet_balance():
    wallet_address = request.args.get('wallet_address')
    if not wallet_address:
        return jsonify({'error': 'No wallet address provided'}), 400

    url = f"https://apilist.tronscan.org/api/account?address={wallet_address}&includeToken=true"
    headers = {"accept": "application/json"}

    try:
        response = requests.get(url, headers=headers)
        data = response.json()
    except requests.RequestException as e:
        return jsonify({'error': f"Failed to fetch balance: {str(e)}"}), 500

    if 'error' in data:
        return jsonify({'error': data['error']})

    usdt_balance = None
    for token in data.get('trc20token_balances', []):
        if token['tokenId'] == contract_address:
            decimals = int(token.get('tokenDecimal', 18))
            usdt_balance = float(token['balance']) * (10 ** -decimals)
            usdt_balance = round(usdt_balance, 2)
            break

    if usdt_balance is not None:
        return jsonify({'balance': usdt_balance})
    else:
        return jsonify({'error': 'Token not found'})

@app.route('/wallet-transactions', methods=['GET'])
def wallet_transactions():
    wallet_address = request.args.get('wallet_address')
    if not wallet_address:
        return jsonify({'error': 'No wallet address provided'}), 400

    url = f"https://apilist.tronscan.org/api/contract/events?contract={contract_address}&limit=50&event_name=Transfer"
    headers = {"accept": "application/json"}

    response = requests.get(url, headers=headers)
    data = response.json()
    if 'data' in data:
        transactions = []
        for tx in data['data']:
            if tx['transferFromAddress'] == wallet_address or tx['transferToAddress'] == wallet_address:
                transaction_type = 'deposit' if tx['transferToAddress'] == wallet_address else 'withdrawal'
                transactions.append({
                    'token': tx['tokenName'],
                    'amount': str(round(float(tx['amount']) * pow(10, -int(tx['decimals'])), 2)),
                    'timestamp': tx['timestamp'],
                    'from': tx['transferFromAddress'],
                    'to': tx['transferToAddress'],
                    'transaction_hash': tx['transactionHash'],
                    'type': transaction_type
                })
        return jsonify({'transactions': transactions})
    else:
        return jsonify({'error': 'No transactions found or failed to fetch data'})

if __name__ == '__main__':
    app.run(debug=True, port=5500, host='0.0.0.0')
