import React from "react";
import { trendingAsset } from "./TrendingAssets";
import "../index.css"

type trendingAssetData = {
    trendingAsset: trendingAsset,
}

const TrendingAsset: React.FC<trendingAssetData> = ({trendingAsset} : trendingAssetData) : JSX.Element => {
    
    
    return (
        <section>
            <img src={trendingAsset.assetImage} width="40px" />
            <div className="flex flex-col w-[270px] items-center gap-3 background-gradient rounded-b-[20px] p-[2vw]">
                <p className="text-[#737BAE]">{trendingAsset.assetName}</p>
                <div className="flex flex-row bg-[#14172B] w-[100%] gap-2 rounded-[17px] p-[10px]">
                    <p className="text-[#ECF0FF] text-center w-80">{trendingAsset.assetPrice}</p>
                    <p className={`${trendingAsset.assetPriceVC}`}>{trendingAsset.assetPriceVariation}</p>
                </div>
                <p className="text-[#737BAE]">Price</p>
                <p className="bg-[#14172B] text-[#ECF0FF] w-[100%] text-center rounded-[17px] p-[10px]">{trendingAsset.assetTVL}</p>
                <p className="text-[#737BAE]">TVL</p>
                <div>
                    {
                        trendingAsset.assetPairs.map((pair, index) => {
                            return <img src = {pair} alt = "No Logo" width="20px"/>
                        })
                    }
                </div>
                <p className="text-[#737BAE]">popular pairs</p>
            </div>
        </section>
    )
}

export default TrendingAsset