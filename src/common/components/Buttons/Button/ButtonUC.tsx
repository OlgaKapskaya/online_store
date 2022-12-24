import React, {FC, memo, ReactNode} from "react";
import {Button} from "@material-ui/core";

type ButtonUCPropsType = {
    name: string
    color?: "inherit" | "primary" | "secondary" | "default"
    variant?: "text" | "outlined" | "contained"
    disabled?: boolean
    onClick: () => void
    icon?: ReactNode
}
export const ButtonUC: FC<ButtonUCPropsType> = memo(({
                                                         name,
                                                         color,
                                                         variant,
                                                         disabled,
                                                         onClick,
                                                         icon
                                                     }) => {
    return (
        <Button color={color ? color : "primary"}
                variant={variant ? variant : "contained"}
                disabled={disabled}
                onClick={onClick}
                startIcon={icon}
        >
            {name}
        </Button>
    )
})