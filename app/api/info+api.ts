import { ExpoRequest, ExpoResponse } from 'expo-router/server';

const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: ExpoRequest) {
    // const ids = request.expoUrl.searchParams.getAll('ids');

    // const response = await fetch(
    //     `https://pro-api.coinmarkeycap.com/v2/cryptocurrency/info?id=${ids}`,
    //     {
    //         headers: {
    //             'X-CMC_PRO_API_KEY': API_KEY!,
    //         },
    //     }
    // );

    // const res = await response.json();
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
        "circulating_supply": 19697603,
        "total_supply": 19697603,
        "infinite_supply": false,
        "platform": null,
        "cmc_rank": 1,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2024-05-13T05:35:00.000Z",
        "quote": {
            "KRW": {
                "price": 83408643.98775277,
                "volume_24h": 23150881507297.14,
                "volume_change_24h": 29.3839,
                "percent_change_1h": -0.14684403,
                "percent_change_24h": -0.05888887,
                "percent_change_7d": -5.0718256,
                "percent_change_30d": -9.65245686,
                "percent_change_60d": -16.55691013,
                "percent_change_90d": 22.06090862,
                "market_cap": 1642950356039090.8,
                "market_cap_dominance": 53.7412,
                "fully_diluted_market_cap": 1751581523742806.5,
                "tvl": null,
                "last_updated": "2024-05-13T05:34:03.000Z"
            }
        }
    }
];