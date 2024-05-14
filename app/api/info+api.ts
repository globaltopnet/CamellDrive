import { ExpoRequest, ExpoResponse } from 'expo-router/server';

const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: ExpoRequest) {
  // const ids = request.expoUrl.searchParams.get('ids');

  // const response = await fetch(
  //   `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids}`,
  //   {
  //     headers: {
  //       'X-CMC_PRO_API_KEY': API_KEY!,
  //     },
  //   }
  // );

  // const res = await response.json();
  // return ExpoResponse.json(res.data);
  return ExpoResponse.json(data);
}

const data = {
  '1': {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    category: 'coin',
    description:
      'Bitcoin (BTC) is a cryptocurrency launched in 2010. Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 19,645,193. The last known price of Bitcoin is 66,750.48093803 USD and is up 2.35 over the last 24 hours. It is currently trading on 10848 active market(s) with $75,693,606,050.91 traded over the last 24 hours. More information can be found at https://bitcoin.org/.',
    slug: 'bitcoin',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
    subreddit: 'bitcoin',
    notice: '',
    tags: [],
    'tag-names': [],
    'tag-groups': [],
    urls: {},
    platform: null,
    date_added: '2010-07-13T00:00:00.000Z',
    twitter_username: '',
    is_hidden: 0,
    date_launched: '2010-07-13T00:00:00.000Z',
    contract_address: [],
    self_reported_circulating_supply: null,
    self_reported_tags: null,
    self_reported_market_cap: null,
    infinite_supply: false,
  },
};