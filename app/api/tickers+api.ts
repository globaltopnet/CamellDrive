import { ExpoRequest, ExpoResponse } from 'expo-router/server';

export async function GET(request: ExpoRequest) {
  const response = await fetch(
    `https://api.coinpaprika.com/v1/tickers/btc-bitcoin/historical?start=2024-01-01&interval=1d`
  );

  const res = await response.json();
  return ExpoResponse.json(res.data);
//   return ExpoResponse.json(data);
}