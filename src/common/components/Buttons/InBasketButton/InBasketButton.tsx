import React, {FC, memo} from "react";
import {ButtonUC} from "../Button/ButtonUC";
import {Done, ShoppingCartOutlined} from "@material-ui/icons";

type InBasketButtonPropsType = {
    onBasket: boolean
    onClick: () => void
}
export const InBasketButton: FC<InBasketButtonPropsType> = memo(({onBasket, onClick}) => {
    return (
        <>
            {
                onBasket
                    ? <ButtonUC name="Товар в корзине"
                                onClick={onClick}
                                icon={<Done/>}
                                variant="text"
                                color="secondary"/>
                    : <ButtonUC name="В корзину"
                                onClick={onClick}
                                icon={<ShoppingCartOutlined/>}
                                color="secondary"/>
            }
        </>
    )
})