import s from "../Navigation.module.css";
import {FC} from "react";
import {NavigationPropsType} from "../Navigation";
import {ButtonUC} from "../../../common/components/Buttons/Button/ButtonUC";

export interface PcMenuNavigationPropsType extends NavigationPropsType {}
export const PcMenuNavigation: FC<PcMenuNavigationPropsType> = ({setFilterProductData,categories}) => {
    return (
        <div className={s.filterMenuContainer}>
            <div className={s.filterMenu}>
                <div className={s.navLink}>
                    <ButtonUC name="All"
                              onClick={() => setFilterProductData("all")}
                    />
                </div>
                {categories.map((elem, index) => {
                    return (
                        <div className={s.navLink} key={index}>
                            <ButtonUC name={elem.type}
                                      onClick={() => setFilterProductData(elem.type)}
                            />
                        </div>)
                })
                }
            </div>
        </div>
    )

}