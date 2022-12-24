import s from "../Navigation.module.css";
import {FC} from "react";
import {ButtonUC} from "../../../common/components/Buttons/Button/ButtonUC";
import {useAppDispatch, useAppSelector} from "../../../common/hooks/react-redux-hooks";
import {CategoriesType} from "../../../bll/types";
import {changeFilterAC} from "../../../bll/reducers/productDataReducer";

export const PcMenuNavigation: FC = () => {
    const categories = useAppSelector<CategoriesType[]>(state => state.productData.categories)
    const dispatch = useAppDispatch()
    const onClickAllButtonHandler = (filter: string) => {
        dispatch(changeFilterAC(filter))
    }
    return (
        <div className={s.filterMenuContainer}>
            <div className={s.filterMenu}>
                <div className={s.navLink}>
                    <ButtonUC name="All"
                              onClick={() => onClickAllButtonHandler("all")}
                    />
                </div>
                {categories.map((elem, index) => {
                    return (
                        <div className={s.navLink} key={index}>
                            <ButtonUC name={elem.category}
                                      onClick={() => onClickAllButtonHandler(elem.category)}
                            />
                        </div>)
                })
                }
            </div>
        </div>
    )

}