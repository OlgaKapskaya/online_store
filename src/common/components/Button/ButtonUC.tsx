import React, {FC, memo} from "react";
import {Button} from "@material-ui/core";

type ButtonUCPropsType = {
    name: string
    color?: "inherit" | "primary" | "secondary" | "default"
    variant?: "text" | "outlined" | "contained"
    disabled?: boolean
    onClick: () => void
}
export const ButtonUC: FC<ButtonUCPropsType> = memo(({
                                                    name,
                                                    color,
                                                    variant,
                                                    disabled,
                                                    onClick
                                                }) => {
    return (
        <Button color={color ? color : "primary"}
                variant={variant ? variant : "contained"}
                disabled={disabled}
                onClick={onClick}>
            { name }
        </Button>
    )
})