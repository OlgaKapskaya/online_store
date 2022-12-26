import IconButton from "@material-ui/core/IconButton/IconButton";
import {FC, ReactNode} from "react";


type IconsButtonPropsType = {
    onClick: () => void
    icon: ReactNode
}
export const IconsButton:FC<IconsButtonPropsType> = ({ onClick, icon}) => {
    return (
        <IconButton onClick={onClick} >
            {icon}
        </IconButton>
    )
}