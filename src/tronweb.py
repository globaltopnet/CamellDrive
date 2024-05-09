from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/wallet-balance')
def wallet_balance():
    contract_address = 'TTLVdtBYipLVqVbPaaQb2Zbcubbpddtxu7'
    wallet_address = 'TSRvxHMoKqAwcpKHTKTQYKYBbwTfqVKJPD'

    url = f"https://apilist.tronscan.org/api/account?address={wallet_address}&includeToken=true"
    headers = {"accept": "application/json"}

    response = requests.get(url, headers=headers)
    data = response.json()

    if 'error' in data:
        return jsonify({'error': data['error']})
    else:
        usdt_balance = None
        for token in data['trc20token_balances']:
            if token['tokenId'] == contract_address:
                usdt_balance = round(float(token['balance'])*pow(10,-token['tokenDecimal']),6)
                break

        if usdt_balance is not None:
            return jsonify({'balance': usdt_balance})
        else:
            return jsonify({'error': 'Token not found'})

if __name__ == '__main__':
    app.run(debug=True, port=5500)
