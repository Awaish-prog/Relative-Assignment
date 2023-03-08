import React from "react";
import TrendingAsset from "./TrendingAsset";

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
            assetImage: "",
            assetName: "",
            assetPrice : "",
            assetPriceVariation: "",
            assetTVL: "",
            assetPairs: []
        },
        {
            assetImage: "",
            assetName: "",
            assetPrice : "",
            assetPriceVariation: "",
            assetTVL: "",
            assetPairs: []
        },
        {
            assetImage: "",
            assetName: "",
            assetPrice : "",
            assetPriceVariation: "",
            assetTVL: "",
            assetPairs: []
        },
        {
            assetImage: "",
            assetName: "",
            assetPrice : "",
            assetPriceVariation: "",
            assetTVL: "",
            assetPairs: []
        },
        {
            assetImage: "",
            assetName: "",
            assetPrice : "",
            assetPriceVariation: "",
            assetTVL: "",
            assetPairs: []
        }
    ]
    return (
        <>
            <p>Trending Assets</p>
            {
                trendingAssetsData.map((trendingAsset, index) => {
                    return <TrendingAsset trendingAsset = {trendingAsset} key={index} />
                })
            }
        </>
    )
}

export default TrendingAssets