import {ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppFullActionsType, AppRootStateType} from "../../bll/store";

export const useAppDispatch: () => ThunkDispatch<AppRootStateType, any, AppFullActionsType> = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector