import {useCallback, useState} from "react";

export const useFilterProductData = ()=> {
    const [filter, setFilter] = useState<string>("all")
    const setFilterProductData = useCallback((newFilter: string) => {
        setFilter(newFilter)
    }, [filter])

    return {filter,setFilterProductData}
}