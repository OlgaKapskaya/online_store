import {FC} from "react";
import {ListItem} from "@material-ui/core";

type SidebarMenuItemPropsType = {
    key?: any
    color?: "primary" | "secondary"
    name: string
    onClick?: () => void
    withBorder?:boolean
}
export const SidebarMenuItem:FC<SidebarMenuItemPropsType> = ({color, name, onClick, key, withBorder}) => {
    return (
        <ListItem button
                  key={key}
                  color={color ? color : "primary"}
                  style={withBorder ? {borderBottom:"1px solid rgba(0, 0, 0, .125)"} : {}}
                  onClick={onClick}
        >
            {name}
        </ListItem>
    )
}