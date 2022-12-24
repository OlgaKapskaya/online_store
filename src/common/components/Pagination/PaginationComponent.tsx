import {ChangeEvent, FC, memo} from "react";
import {useDispatch} from "react-redux";
import {changeCurrentPageAC} from "../../../bll/reducers/productDataReducer";
import {Pagination} from "@material-ui/lab";
import {useAppSelector} from "../../hooks/react-redux-hooks";


export const PaginationComponent: FC = memo(() => {
    const currentPage = useAppSelector<number>(state => state.productData.currentPage)
    const totalCount = useAppSelector< number>(state => state.productData.totalCount)
    const pageSize = useAppSelector<number>(state => state.productData.pageSize)

    const pagesCount = Math.ceil(totalCount / pageSize)
    const dispatch = useDispatch()

    const paginationStyle = {
        margin: "20px"
    }
    const onChangePageHandler = (event: ChangeEvent<unknown>, page: number) => {
        dispatch(changeCurrentPageAC(page))
    }

    return (
        <Pagination count={pagesCount}
                    page={currentPage}
                    shape="rounded"
                    showFirstButton
                    showLastButton
                    onChange={onChangePageHandler}
                    style={paginationStyle}/>
    )
})