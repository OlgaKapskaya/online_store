import React, {FC} from "react";
import s from "./Description.module.css";
type DescriptionPropsType = {
    description: string
}
export const Description:FC<DescriptionPropsType> = ({description}) => {
    return (
        <div className={s.description}>
            <span className={s.infoTitle}> Описание </span>
            <span style={{textAlign: 'start'}}> {description} </span>
        </div>
    )
}