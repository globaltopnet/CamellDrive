import { ExpoRequest, ExpoResponse } from 'expo-router/server';

const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: ExpoRequest) {
  // const limit = request.expoUrl.searchParams.get('limit') || 5;

  // const response = await fetch(
  //   `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${limit}&convert=KRW`,
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

const data = [
    {
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "slug": "bitcoin",
        "num_market_pairs": 11041,
        "date_added": "2010-07-13T00:00:00.000Z",
        "tags": [
            "mineable",
            "pow",
            "sha-256",
            "store-of-value",
            "state-channel",
            "coinbase-ventures-portfolio",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "binance-labs-portfolio",
            "blockchain-capital-portfolio",
            "boostvc-portfolio",
            "cms-holdings-portfolio",
            "dcg-portfolio",
            "dragonfly-capital-portfolio",
            "electric-capital-portfolio",
            "fabric-ventures-portfolio",
            "framework-ventures-portfolio",
            "galaxy-digital-portfolio",
            "huobi-capital-portfolio",
            "alameda-research-portfolio",
            "a16z-portfolio",
            "1confirmation-portfolio",
            "winklevoss-capital-portfolio",
            "usv-portfolio",
            "placeholder-ventures-portfolio",
            "pantera-capital-portfolio",
            "multicoin-capital-portfolio",
            "paradigm-portfolio",
            "bitcoin-ecosystem",
            "ftx-bankruptcy-estate"
        ],
        "max_supply": 21000000,
        "circulating_supply": 19697650,
        "total_supply": 19697650,
        "infinite_supply": false,
        "platform": null,
        "cmc_rank": 1,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2024-05-13T09:11:00.000Z",
        "quote": {
            "KRW": {
                "price": 86102915.67235452,
                "volume_24h": 29185333576151.688,
                "volume_change_24h": 63.1007,
                "percent_change_1h": 0.77739968,
                "percent_change_24h": 3.31729135,
                "percent_change_7d": -3.49087786,
                "percent_change_30d": -6.31366838,
                "percent_change_60d": -14.30564484,
                "percent_change_90d": 25.84211012,
                "market_cap": 1696025096893554,
                "market_cap_dominance": 53.823,
                "fully_diluted_market_cap": 1808161229119442.8,
                "tvl": null,
                "last_updated": "2024-05-13T09:11:04.000Z"
            }
        }
    },
]