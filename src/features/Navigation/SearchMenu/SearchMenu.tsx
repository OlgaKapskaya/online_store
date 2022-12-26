import React, {ChangeEvent} from "react";
import s from "./SearchMenu.module.css"
import {CustomSelect} from "../../../common/components/Select/CustomSelect";
import {changeSearchTitleAC} from "../../../bll/reducers/productDataReducer";
import {Search} from "@material-ui/icons";
import {Input} from "../../../common/components/Input/Input";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import {useSelect} from "./hooks/useSelect";
import {useAppDispatch} from "../../../common/hooks/react-redux-hooks";

export const SearchMenu = () => {
    const dispatch = useAppDispatch()
    const {value, optionsToSelect, onChangeSelectHandler} = useSelect()
    const onChangeSearchField = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(changeSearchTitleAC(e.currentTarget.value))
    }

    return (
        <div className={s.MenuContainer}>
            <Input onChange={onChangeSearchField}
                   placeholder="Введите название"
                   className={s.searchField}
                   color="primary"
                   variant="outlined"
                   InputProps={{
                       startAdornment: (
                           <InputAdornment position='start'>
                               <Search style={{opacity: '0.5'}}/>
                           </InputAdornment>
                       )
                   }}
            />
            <div className={s.selectContainer}>
                <span> Сортировать по: </span>
                <CustomSelect value={value}
                              options={optionsToSelect}
                              onChange={onChangeSelectHandler}/>
            </div>
        </div>
    )
}