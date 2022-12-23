import s from './Preloader.module.css'
import {CircularProgress} from "@material-ui/core";

export const Preloader = () => {
    return (
        <div className={s.containerPreloader}>
            <CircularProgress color='secondary'/>
        </div>
    )
}