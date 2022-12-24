import s from "./ProductCardFull.module.css"
import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ProductDataType} from "../../../bll/types";
import {catalogAPI} from "../../../dal/api";
import {setFetchingAC} from "../../../bll/reducers/productDataReducer";
import {Preloader} from "../../../common/components/Preloader/Preloader";
import {PATH} from "../../../common/utils/constants/constants";
import {OtherInfo} from "./OtherInfo/OtherInfo";
import {Description} from "./Description/Description";
import {PriceInfo} from "./PriceInfo/PriceInfo";
import {MainInfo} from "./MainInfo/MainInfo";
import {BackButton} from "../../../common/components/Buttons/BackButton/BackButton";
import {useAppDispatch, useAppSelector} from "../../../common/hooks/react-redux-hooks";

export const ProductCardFull: FC = () => {
    const params = useParams()
    const isFetching = useAppSelector<boolean>(state => state.productData.isFetching)
    const [product, setProduct] = useState<ProductDataType>({} as ProductDataType)
    const dispatch = useAppDispatch()

    //TODO унести в санку
    useEffect(() => {
        dispatch(setFetchingAC(true))
        catalogAPI.getProduct(params.productID?.slice(1))
            .then(response => {
                setProduct(response)
                dispatch(setFetchingAC(false))
            })
    }, [params.productID, dispatch])

    return (
        <div className={s.contentContainer}>
            <BackButton name="В каталог" linkTo={PATH.CATALOG}/>
            {isFetching
                ? <Preloader/>
                : <section className={s.productCardContainer}>
                    <MainInfo name={product.productName} article={product.productArticle} photo={product.productPhoto}/>
                    <div className={s.info}>
                        <PriceInfo product={product}/>
                        <Description description={product.productDescription}/>
                        <OtherInfo/>
                    </div>
                </section>
            }
        </div>
    )
}