import React, {FC} from "react";
import s from "./OtherInfo.module.css";
import {ImportExport} from "@material-ui/icons";

export const OtherInfo: FC = () => {
    return (
        <div className={s.otherInfo}>
            <span className={s.infoTitle}> Обмен с выгодой </span>
            <span style={{textAlign: "start"}}>
                                <ImportExport style={{fontSize: "35px"}}/>
                                Trade-in: сдайте свой старый девайс и получите дополнительную выгоду при покупке нового
            </span>
        </div>
    )
}