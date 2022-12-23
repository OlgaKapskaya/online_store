import {FC, memo} from "react";
import {ShoppingBasket} from "@material-ui/icons";
import {Badge, IconButton} from "@material-ui/core";

type ShopButtonPropsType = {
    content: number
    onClick: () => void
    badgeColor?: "primary" | "secondary" | "default" | "error" | undefined
    iconColor?: "primary" | "secondary" | "error" | "inherit" | "disabled" | "action" | undefined
}
export const ShopButton:FC<ShopButtonPropsType> = memo(({content, onClick, badgeColor, iconColor}) => {
    return (
        <IconButton onClick={onClick}>
            <Badge badgeContent={content} color={badgeColor ? badgeColor : "secondary"}
                   overlap="rectangular"
                   invisible={content < 1} variant="standard">
                <ShoppingBasket color={iconColor ? iconColor : "primary"}/>
            </Badge>
        </IconButton>
    )
})