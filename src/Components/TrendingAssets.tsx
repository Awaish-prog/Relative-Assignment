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
    imageBackground: string,
    assetName: string,
    assetPrice : string,
    assetPriceVariation: string,
    assetPriceVC: string,
    assetTVL: string,
    assetPairs: Array<Array<string>>
}

const TrendingAssets: React.FC = () : JSX.Element => {

    const trendingAssetsData: Array<trendingAsset> = [
        {
            assetImage: bitcoinLogo,
            imageBackground: "bitcoin",
            assetName: "Bitcoin (BTC)",
            assetPrice : "$31,812.80",
            assetPriceVariation: "+10%",
            assetPriceVC: "text-[#00FFA3]",
            assetTVL: "$60,000",
            assetPairs: [[solanaLogo, "solana"], [ethereumLogo, "ethereum"], [binanceLogo,"binance"]]
        },
        {
            assetImage: solanaLogo,
            imageBackground: "solana",
            assetName: "Solana (SOL)",
            assetPrice : "$32.83",
            assetPriceVariation: "-12.32%",
            assetPriceVC: "text-[#FF4D4D]",
            assetTVL: "$60,000",
            assetPairs: [[bitcoinLogo, "bitcoin"], [ethereumLogo, "ethereum"], [binanceLogo, "binance"]]
        },
        {
            assetImage: ethereumLogo,
            imageBackground: "ethereum",
            assetName: "Ethereum (ETH)",
            assetPrice : "$1,466.45",
            assetPriceVariation: "-11.93%",
            assetPriceVC: "text-[#FF4D4D]",
            assetTVL: "$60,000",
            assetPairs: [[solanaLogo, "solana"], [bitcoinLogo, "bitcoin"], [binanceLogo, "binance"]]
        },
        {
            assetImage: binanceLogo,
            imageBackground: "binance",
            assetName: "Binance USD (BUSD)",
            assetPrice : "$1.00",
            assetPriceVariation: "+0.26%",
            assetPriceVC: "text-[#00FFA3]",
            assetTVL: "$60,000",
            assetPairs: [[solanaLogo, "solana"], [ethereumLogo, "ethereum"], [binanceLogo, "binance"]]
        },
        {
            assetImage: shibaLogo,
            imageBackground: "shiba",
            assetName: "Shiba Inu (SHIB)",
            assetPrice : "$0.00000001948",
            assetPriceVariation: "-8.1%",
            assetPriceVC: "text-[#FF4D4D]",
            assetTVL: "$60,000",
            assetPairs: [[solanaLogo, "solana"], [ ethereumLogo, "ethereum" ], [binanceLogo, "binance"]]
        }
    ]
    return (
        <section className="flex flex-col mt-[5vw]">
            <div className="flex flex-row items-center gap-3 ml-5">
                <img src = {trendingAssetLogo} alt = "No Logo" width="20px"/>
                <span className="text-[#ECF0FF]">Trending Assets</span>
            </div>
            <div className="flex gap-5 w-[100vw] justify-around flex-wrap">
            {
                trendingAssetsData.map((trendingAsset, index) => {
                    return <TrendingAsset trendingAsset = {trendingAsset} key={index} />
                })
            }
            </div>
            <div className="w-[50px] h-[50px]"></div>
        </section>
    )
}

export default TrendingAssets