import React, {ChangeEvent} from "react";
import s from './SearchMenu.module.css'
import {TextField} from "@material-ui/core";
import {OptionsSelectType} from "../../../BLL/types";

type SearchMenuPropsType = {
    onSortedProductData: (sortInfo: string) => void
}
export const SearchMenu = (props: SearchMenuPropsType) => {
    let optionsToSelect: OptionsSelectType[] = [
        // {id: '0', value: 'Умолчанию'},
        {id: '1', value: 'Названию (от А до Я)'},
        {id: '2', value: 'Названию (от Я до А)'},
        {id: '3', value: 'Стоимости (сначала дешевые)'},
        {id: '4', value: 'Стоимости (сначала дорогие)'},
    ]
    const onChangeSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        props.onSortedProductData(event.currentTarget.value)
    }
    return (
        <div className={s.MenuContainer}>
                <TextField type={'text'}
                           label={'Введите название'}
                           size={'small'}
                           variant={'outlined'}/>
            <div>
                <span> Сортировать по: </span>
                <select onChange={onChangeSelectHandler}>
                    {optionsToSelect.map( elem => <option value={elem.id} key={elem.id}>{elem.value}</option>)}
                </select>
            </div>

        </div>
    )
}