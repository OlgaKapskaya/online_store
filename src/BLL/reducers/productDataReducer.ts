import {ProductDataType} from "../types";


type ActionType = any


export const productDataReducer = (state: ProductDataType[], action: ActionType): ProductDataType[] => {
    switch (action.type) {
        default:
            return state
    }

}
