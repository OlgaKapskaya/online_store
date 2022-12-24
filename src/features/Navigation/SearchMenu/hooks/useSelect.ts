import {useState} from "react";
import {OptionsSelectType, SortType} from "../../../../bll/types";
import {changeSortDataTypeAC} from "../../../../bll/reducers/productDataReducer";
import {useAppDispatch} from "../../../../common/hooks/react-redux-hooks";

export const useSelect = () => {
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
                sortedRequest("productName", "asc"); break
            case '2':
                sortedRequest("productName", "desc"); break
            case '3':
                sortedRequest("productPrice", "asc"); break
            case '4':
                sortedRequest("productPrice", "desc"); break
            default: break
        }
    }
    return {value, optionsToSelect, onChangeSelectHandler}
}