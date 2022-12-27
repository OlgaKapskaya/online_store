import s from "./Basket.module.css"
import {Button, Drawer} from "@material-ui/core";
import {BasketItem} from "./BasketItem/BasketItem";
import React, {FC} from "react";
import {clearBasketTC} from "../../../../bll/reducers/basketReducer";
import {BasketHeader} from "./BasketHeader/BasketHeader";
import {selectBasketData} from "../../../../bll/selectors/backetSelectors";
import {ButtonUC} from "../../../../common/components/Buttons/Button/ButtonUC";
import {useAppDispatch, useAppSelector} from "../../../../common/hooks/react-redux-hooks";
import {addOrderTC} from "../../../../bll/reducers/userReducer";


type BasketProsType = {
    totalPrice: number
    isVisible: boolean
    setIsVisible: (isVisible: boolean) => void
}
export const Basket: FC<BasketProsType> = ({
                                               totalPrice,
                                               isVisible,
                                               setIsVisible
                                           }) => {

    const dispatch = useAppDispatch()
    const basketProduct = useAppSelector(selectBasketData)
    const isLoading = useAppSelector(state => state.app.isLoading)

    const onClearBasketHandler = () => {
        dispatch(clearBasketTC())
    }

    const addOrderHandler = () => {
        dispatch(addOrderTC(basketProduct, totalPrice))
    }

    return (
        <Drawer anchor="right"
                open={isVisible}
                onClose={() => setIsVisible(false)}>
            <BasketHeader basketProductLength={basketProduct.length} totalPrice={totalPrice}/>
            <div className={s.buttonGroup}>
                <ButtonUC name="Очистить корзину"
                          disabled={!basketProduct.length}
                          onClick={onClearBasketHandler}
                />
                {
                    isLoading
                        ? <Button variant="contained" color="primary"> Loading ... </Button>
                        : <ButtonUC name="Оформить заказ"
                                    color="secondary"
                                    disabled={!basketProduct.length}
                                    onClick={addOrderHandler}
                        />
                }

            </div>
            {
                basketProduct.map(elem => <BasketItem key={elem.productID}
                                                      basketItem={elem}/>)
            }

        </Drawer>
    )
}