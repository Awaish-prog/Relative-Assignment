import React from "react";
import TrendingAsset from "./TrendingAsset";
import trendingAssetLogo from "../images/TrendingAssetsLogo.png"
import bitcoinLogo from "../images/BitcoinLogo.png"
import binanceLogo from "../images/BinanceLogo.png"
import ethereumLogo from "../images/EthereumLogo.png"
import shibaLogo from "../images/ShibaLogo.png"
import solanaLogo from "../images/SolanaLogo.png"

export interface trendingAsset {
    assetImage: string,
    assetName: string,
    assetPrice : string,
    assetPriceVariation: string,
    assetTVL: string,
    assetPairs: Array<string>
}

const TrendingAssets: React.FC = () : JSX.Element => {

    const trendingAssetsData: Array<trendingAsset> = [
        {
            assetImage: bitcoinLogo,
            assetName: "Bitcoin (BTC)",
            assetPrice : "$31,812.80",
            assetPriceVariation: "+10%",
            assetTVL: "$60,000",
            assetPairs: [solanaLogo, ethereumLogo, binanceLogo]
        },
        {
            assetImage: solanaLogo,
            assetName: "Solana (SOL)",
            assetPrice : "$32.83",
            assetPriceVariation: "-12.32%",
            assetTVL: "$60,000",
            assetPairs: [bitcoinLogo, ethereumLogo, binanceLogo]
        },
        {
            assetImage: ethereumLogo,
            assetName: "Ethereum (ETH)",
            assetPrice : "$1,466.45",
            assetPriceVariation: "-11.93%",
            assetTVL: "$60,000",
            assetPairs: [solanaLogo, bitcoinLogo, binanceLogo]
        },
        {
            assetImage: binanceLogo,
            assetName: "Binance USD (BUSD)",
            assetPrice : "$1.00",
            assetPriceVariation: "+0.26%",
            assetTVL: "$60,000",
            assetPairs: [solanaLogo, bitcoinLogo, binanceLogo]
        },
        {
            assetImage: shibaLogo,
            assetName: "Shiba Inu (SHIB)",
            assetPrice : "$0.00000001948",
            assetPriceVariation: "-8.1%",
            assetTVL: "$60,000",
            assetPairs: [solanaLogo, ethereumLogo, binanceLogo]
        }
    ]
    return (
        <section className="flex flex-col">
            <div className="flex flex-row items-center gap-3">
                <img src = {trendingAssetLogo} alt = "No Logo" width="20px"/>
                <span className="text-[#ECF0FF]">Trending Assets</span>
            </div>
            <div>
            {
                trendingAssetsData.map((trendingAsset, index) => {
                    return <TrendingAsset trendingAsset = {trendingAsset} key={index} />
                })
            }
            </div>
        </section>
    )
}

export default TrendingAssets