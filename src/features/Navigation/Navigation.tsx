import {FC, memo} from "react";
import s from "./Navigation.module.css"
import {SearchMenu} from "./SearchMenu/SearchMenu";
import {MobileMenuNavigation} from "./MobileMenuNavigation/MobileMenuNavigation";
import {PcMenuNavigation} from "./PcMenuNavigation/PcMenuNavigation";


export const Navigation: FC = memo(() => {

    return (
        <div className={s.NavigationContainer}>
            <MobileMenuNavigation />
            <PcMenuNavigation />
            <div className={s.searchMenu}>
                <SearchMenu />
            </div>
        </div>
    )
})