import React from "react";
import { trendingAsset } from "./TrendingAssets";
import "../index.css"

type trendingAssetData = {
    trendingAsset: trendingAsset,
}

const TrendingAsset: React.FC<trendingAssetData> = ({trendingAsset} : trendingAssetData) : JSX.Element => {
    
    
    return (
        <section>
            <div className="w-[82px] h-[20px] rounded-t-[40px] filler-div1"></div>
            <div className="w-[82px] h-[20px] rounded-t-[40px] filler-div2"></div>


            <div className="flex justify-center items-center w-[100px] h-[100px] rounded-[50px] bg-[#14172B] logo-div">
                <div className={`w-[80px] h-[80px] flex justify-center items-center rounded-[50%] ${trendingAsset.imageBackground}-gradient `}>
                    <div className={`w-[40px] h-[40px] flex justify-center items-center ${trendingAsset.imageBackground} rounded-[50%]`}>
                        <img src={trendingAsset.assetImage} width="20px" />
                    </div>
                </div>
            </div>


            <div className="flex flex-col w-[250px] items-center gap-3 background-gradient rounded-b-[20px] p-[2vw] pt-[50px]">
                <p className="text-[#737BAE]">{trendingAsset.assetName}</p>
                <div className="flex flex-row items-center bg-[#14172B] w-[100%] gap-2 rounded-[17px] p-[10px]">
                    <p className="text-[#ECF0FF] text-left w-80">{trendingAsset.assetPrice}</p>
                    <p className={`${trendingAsset.assetPriceVC} text-xs`}>{trendingAsset.assetPriceVariation}</p>
                </div>


                <p className="text-[#737BAE]">Price</p>
                <p className="bg-[#14172B] text-[#ECF0FF] w-[100%] text-center rounded-[17px] p-[10px]">{trendingAsset.assetTVL}</p>
                <p className="text-[#737BAE]">TVL</p>


                <div className="flex gap-3 bg-[#14172B] p-2 rounded-[20px]">
                    {
                        trendingAsset.assetPairs.map((pair, index) => {
                            return <div className={`w-[30px] h-[30px] flex justify-center items-center ${pair[1]} rounded-[50%]`}>
                            <img src={pair[0]} width="15px" />
                        </div>
                        })
                    }
                </div>


                <p className="text-[#737BAE]">Popular pairs</p>
            </div>
        </section>
    )
}

export default TrendingAsset