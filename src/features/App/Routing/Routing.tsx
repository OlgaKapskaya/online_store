import React, {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "../../../common/utils/constants/constants";
import {Preloader} from "../../../common/components/Preloader/Preloader";
import {ShopContent} from "../../ShopContent/ShopContent";
import {PersonalProductCard} from "../../ShopContent/PersonalProductCard/PersonalProductCard";
import {useAppFetchLogic} from "../hooks/useAppLogic";

export const Routing:FC = () => {

    const {isFetching, filter} = useAppFetchLogic()

    return (
        <Routes>
            <Route path="/" element={<Navigate to={PATH.CATALOG}/>}/>
            <Route path={PATH.CATALOG} element={
                isFetching
                    ? <Preloader/>
                    : <ShopContent filter={filter}/>
            }/>
            <Route path={PATH.PRODUCT} element={<PersonalProductCard />}/>

        </Routes>
    )
}