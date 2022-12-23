import {FC, memo} from "react";
import s from "./Navigation.module.css"
import {CategoriesType} from "../../bll/types";
import {SearchMenu} from "./SearchMenu/SearchMenu";
import {MobileMenuNavigation} from "./MobileMenuNavigation/MobileMenuNavigation";
import {PcMenuNavigation} from "./PcMenuNavigation/PcMenuNavigation";

export type NavigationPropsType = {
    categories: CategoriesType[]
    setFilterProductData: (filter: string) => void
}


export const Navigation: FC<NavigationPropsType> = memo(({categories, setFilterProductData}) => {

    const setFilterProductDataHandler = (value:string) => {
        setFilterProductData(value)
    }
    return (
        <div className={s.NavigationContainer}>
            <MobileMenuNavigation setFilterProductData={setFilterProductData} categories={categories}/>
            <PcMenuNavigation categories={categories} setFilterProductData={setFilterProductDataHandler}/>
            <div className={s.searchMenu}>
                <SearchMenu />
            </div>
        </div>
    )
})