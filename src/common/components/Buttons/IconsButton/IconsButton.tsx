import IconButton from "@material-ui/core/IconButton/IconButton";
import {FC, ReactNode} from "react";
import {Tooltip} from "@material-ui/core";


type IconsButtonPropsType = {
    onClick: () => void
    icon: ReactNode
    hint: string
}
export const IconsButton: FC<IconsButtonPropsType> = ({onClick, icon, hint}) => {
    return (
        <Tooltip title={hint} arrow>
            <IconButton onClick={onClick} color="primary">
                {icon}
            </IconButton>
        </Tooltip>
    )
}