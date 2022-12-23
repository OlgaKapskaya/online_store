import {Pagination} from '@material-ui/lab';
import {memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentPageAC} from "../../../bll/reducers/productDataReducer";
import {AppRootStateType} from "../../../bll/store";

type PaginationComponentPropsType = {
    pagesCount: number
}
export const PaginationComponent = memo((props: PaginationComponentPropsType) => {
    const currentPage = useSelector<AppRootStateType, number>(state => state.productData.currentPage)
    const dispatch = useDispatch()
    return (
        <Pagination count={props.pagesCount}
                    page={currentPage}
                    shape='rounded'
                    showFirstButton
                    showLastButton
                    onChange={(event, page) => {
                        dispatch(changeCurrentPageAC(page))}
                    }
                    style={{margin: '20px'}}/>
    )
})