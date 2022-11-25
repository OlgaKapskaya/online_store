import {Pagination} from '@material-ui/lab';
import {memo} from "react";
import {useDispatch} from "react-redux";
import {changeCurrentPageAC} from "../../../BLL/reducers/productDataReducer";

type PaginationComponentPropsType = {
    pagesCount: number
}
export const PaginationComponent = memo((props: PaginationComponentPropsType) => {
    const dispatch = useDispatch()
    return (
        <Pagination count={props.pagesCount}
                    shape='rounded'
                    showFirstButton
                    showLastButton
                    onChange={(event, page) => dispatch(changeCurrentPageAC(page))}
                    style={{margin: '20px'}}/>
    )
})