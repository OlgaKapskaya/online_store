import {FC} from "react";
import s from "./BasketItem.module.css"
import {BasketProductType} from "../../../../../bll/types";
import {DeleteButton} from "../../../../../common/components/Buttons/DeleteButton/DeleteButton";
import {Input} from "../../../../../common/components/Input/Input";
import {useBasketItem} from "./hooks/useBasketItem";
import {CURRENCY} from "../../../../../common/utils/constants/constants";


type BasketItemPropsType = {
    basketItem: BasketProductType
}
export const BasketItem: FC<BasketItemPropsType> = ({basketItem}) => {
    const {onChangeCountOfItem, onRemoveItemFromBasketHandler} = useBasketItem(basketItem)
    return (
        <div className={s.cardContainer}>

            <div className={s.productFullInfo}>
                <img src={basketItem.productPhoto} alt="product" className={s.productPhoto}/>
                <div className={s.info}>
                    <div className={s.productName}>{basketItem.productName}</div>
                    <div className={s.article}>Артикул: {basketItem.productArticle}</div>
                    <div className={s.price}>{basketItem.productPrice} {CURRENCY}</div>
                    <div className={s.count}>
                        <span>Укажите количество:</span>
                        <Input type="number"
                               value={basketItem.productCountToBuy}
                               onChange={onChangeCountOfItem}
                               style={{width: "100px"}}/>
                    </div>
                </div>
                <div className={s.deleteButton}>
                    <DeleteButton hint="Удалить из корзины"
                                  onClick={onRemoveItemFromBasketHandler}
                    />
                </div>
            </div>
        </div>
    )
}