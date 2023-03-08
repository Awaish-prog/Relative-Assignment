import React from "react";
import { trendingAsset } from "./TrendingAssets";

type trendingAssetData = {
    trendingAsset: trendingAsset,
}

const TrendingAsset: React.FC<trendingAssetData> = ({trendingAsset} : trendingAssetData) : JSX.Element => {
    
    
    return (
        <section>
            <img src={trendingAsset.assetImage} width="40px" />
        </section>
    )
}

export default TrendingAsset