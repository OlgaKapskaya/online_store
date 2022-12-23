import s from "../HeaderComponent.module.css";
import {QueryBuilderOutlined} from "@material-ui/icons";
import {FC} from "react";
import {WORK_TIME} from "../../../common/utils/constants/constants";

export const HeaderWorkTime: FC = () => {
    return (
        <div className={s.workTimeContainer_ALL}>
            <div className={s.workTimeContainer}>
                <QueryBuilderOutlined/>
                <div className={s.workTime}>
                    <div>{WORK_TIME.Weekdays}</div>
                    <div>{WORK_TIME.Weekend}</div>
                </div>
            </div>
        </div>
    )
}