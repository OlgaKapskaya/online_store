import {Pagination} from '@material-ui/lab';
import {ChangeEvent, FC, memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentPageAC} from "../../../bll/reducers/productDataReducer";
import {AppRootStateType} from "../../../bll/store";

type PaginationComponentPropsType = {
    pagesCount: number
}
export const PaginationComponent: FC<PaginationComponentPropsType> = memo(({pagesCount}) => {
    const currentPage = useSelector<AppRootStateType, number>(state => state.productData.currentPage)
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