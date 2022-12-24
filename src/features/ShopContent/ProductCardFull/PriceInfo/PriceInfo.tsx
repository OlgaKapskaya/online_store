import {FC} from "react";
import s from "./PriceInfo.module.css";
import {CURRENCY} from "../../../../common/utils/constants/constants";
import {ProductDataType} from "../../../../bll/types";
import {useNewBasketItem} from "../../../../common/hooks/useNewBasketItem";
import {InBasketButton} from "../../../../common/components/Buttons/InBasketButton/InBasketButton";

type PriceInfoPropsType = {
    product: ProductDataType
}
export const PriceInfo: FC<PriceInfoPropsType> = ({product}) => {
    const [onBasket, setInBasket] = useNewBasketItem(product)
    return (
        <>
            <div className={s.priceContainer}>
                <span>Цена</span>
                <span className={s.productPrice}> {product.productPrice} {CURRENCY} </span>
            </div>
            <div className={s.buttonContainer}>
                <InBasketButton onBasket={onBasket} onClick={setInBasket}/>
            </div>
        </>
    )
}