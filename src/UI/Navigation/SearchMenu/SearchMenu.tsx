import React, {useState} from "react";
import s from './SearchMenu.module.css'
import {OptionsSelectType} from "../../../BLL/types";
import {CustomSelect} from "../../CustomComponents/CustomSelect";

type SearchMenuPropsType = {
    onSortedProductData: (sortInfo: string) => void
}
export const SearchMenu = (props: SearchMenuPropsType) => {
    const [value, setValue] = useState('Без сортировки')
    let optionsToSelect: OptionsSelectType[] = [
        // {id: '0', value: 'Без сортировки'},
        {id: '1', value: 'Названию (от А до Я)'},
        {id: '2', value: 'Названию (от Я до А)'},
        {id: '3', value: 'Стоимости (сначала дешевые)'},
        {id: '4', value: 'Стоимости (сначала дорогие)'},
    ]
    const onChangeSelectHandler = (value: string) => {
        setValue(value)
        let index = optionsToSelect.find(elem=>elem.value===value)!.id
        props.onSortedProductData(index)
    }
    return (
        <div className={s.MenuContainer}>
                {/*<TextField type={'text'}*/}
                {/*           label={'Введите название'}*/}
                {/*           size={'small'}*/}
                {/*           variant={'outlined'}/>*/}
            <div className={s.selectContainer}>
                <span> Сортировать по: </span>
                <CustomSelect value={value} options={optionsToSelect} onChange={onChangeSelectHandler}/>
            </div>

        </div>
    )
}