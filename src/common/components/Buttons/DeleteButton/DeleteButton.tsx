import React, {FC, memo} from "react";
import {IconButton, Tooltip} from "@material-ui/core";
import {DeleteOutlineOutlined} from "@material-ui/icons";

type DeleteButtonPropsType = {
    hint?: string
    onClick: () => void
}
export const DeleteButton: FC<DeleteButtonPropsType> = memo(({hint, onClick}) => {
    return (
        <Tooltip title={hint ? hint : "Удалить"} arrow>
            <IconButton onClick={onClick}>
                <DeleteOutlineOutlined/>
            </IconButton>
        </Tooltip>
    )
})