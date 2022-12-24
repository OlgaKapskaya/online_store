import {FC} from "react";
import s from "../ProductCardFull.module.css";

type MainInfoPropsType = {
    name: string
    article: string
    photo: string
}
export const MainInfo: FC<MainInfoPropsType> = ({name, photo, article}) => {
    return (
        <div className={s.titleAndPhoto}>
            <h2> {name} </h2>
            <span style={{fontSize: "12px", opacity: "0.5"}}>{article}</span>
            <img src={photo} alt="productPhoto" className={s.productPhoto}/>
        </div>
    )
}