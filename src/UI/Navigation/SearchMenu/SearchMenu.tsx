import React, {useState} from "react";
import s from './SearchMenu.module.css'
import {OptionsSelectType} from "../../../BLL/types";
import {CustomSelect} from "../../CustomComponents/CustomSelect";
import {useDispatch} from "react-redux";
import {getDataAC, setFetchingAC} from "../../../BLL/reducers/productDataReducer";
import {catalogAPI} from "../../../API/api";

type SearchMenuPropsType = {}
export const SearchMenu = (props: SearchMenuPropsType) => {
    const [value, setValue] = useState('Без сортировки')
    const dispatch = useDispatch()

    let optionsToSelect: OptionsSelectType[] = [
        // {id: '0', value: 'Без сортировки'},
        {id: '1', value: 'Названию (от А до Я)'},
        {id: '2', value: 'Названию (от Я до А)'},
        {id: '3', value: 'Стоимости (сначала дешевые)'},
        {id: '4', value: 'Стоимости (сначала дорогие)'},
    ]

    const sortedRequest = (sortData: string, sortType: string) => {
        dispatch(setFetchingAC(true))
        catalogAPI.getSortedCatalog(sortData, sortType).then(response => {
            dispatch(getDataAC(response))
            dispatch(setFetchingAC(false))
        })
    }

    const onChangeSelectHandler = (value: string) => {
        setValue(value)
        let index = optionsToSelect.find(elem => elem.value === value)!.id
        switch (index){
            case '1': sortedRequest('productName','asc'); break
            case '2': sortedRequest('productName','desc'); break
            case '3': sortedRequest('productPrice','asc'); break
            case '4': sortedRequest('productPrice','desc'); break
            default: break
        }
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