import React, {ChangeEvent, useState} from "react";
import s from './SearchMenu.module.css'
import {OptionsSelectType, SortType} from "../../../bll/types";
import {CustomSelect} from "../../../common/components/Select/CustomSelect";
import {changeSearchTitleAC, changeSortDataTypeAC} from "../../../bll/reducers/productDataReducer";
import {InputAdornment, TextField} from "@material-ui/core";
import {Search} from "@material-ui/icons";
import {useAppDispatch} from "../../../bll/store";

export const SearchMenu = () => {
    const [value, setValue] = useState('Без сортировки')
    const dispatch = useAppDispatch()

    const optionsToSelect: OptionsSelectType[] = [
        {id: '1', value: 'Названию (от А до Я)'},
        {id: '2', value: 'Названию (от Я до А)'},
        {id: '3', value: 'Стоимости (сначала дешевые)'},
        {id: '4', value: 'Стоимости (сначала дорогие)'},
    ]

    const sortedRequest = (sortData: string, sortType: SortType) => {
        dispatch(changeSortDataTypeAC(sortData, sortType))
    }

    const onChangeSelectHandler = (value: string) => {
        setValue(value)
        let index = optionsToSelect.find(elem => elem.value === value)!.id
        switch (index) {
            case '1':
                sortedRequest('productName', 'asc'); break
            case '2':
                sortedRequest('productName', 'desc'); break
            case '3':
                sortedRequest('productPrice', 'asc'); break
            case '4':
                sortedRequest('productPrice', 'desc'); break
            default: break
        }
    }
    const onChangeSearchField = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(changeSearchTitleAC(e.currentTarget.value))
    }

    return (
        <div className={s.MenuContainer}>
            <TextField type='text'
                       placeholder='Введите название'
                       size='small'
                       variant='outlined'
                       className={s.searchField}
                       onChange={onChangeSearchField}
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position='start'>
                                   <Search style={{opacity: '0.5'}}/>
                               </InputAdornment>
                           )
                       }}/>
            <div className={s.selectContainer}>

                <span> Сортировать по: </span>
                <CustomSelect value={value}
                              options={optionsToSelect}
                              onChange={onChangeSelectHandler}/>
            </div>

        </div>
    )
}