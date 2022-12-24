import React, {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "../../../common/utils/constants/constants";
import {Preloader} from "../../../common/components/Preloader/Preloader";
import {ShopContent} from "../../ShopContent/ShopContent";
import {ProductCardFull} from "../../ShopContent/ProductCardFull/ProductCardFull";
import {useAppFetchLogic} from "../hooks/useAppLogic";

export const Routing:FC = ({}) => {
    const {isFetching, filter} = useAppFetchLogic()

    return (
        <Routes>
            <Route path="/" element={<Navigate to={PATH.CATALOG}/>}/>
            <Route path={PATH.CATALOG} element={
                isFetching
                    ? <Preloader/>
                    : <ShopContent />
            }/>
            <Route path={PATH.PRODUCT} element={<ProductCardFull />}/>

        </Routes>
    )
}