import {instance} from "../common/utils/constants/api/instance";
import {OrderPayloadType, OrderType, UserType} from "../bll/types";
import {ResponseType} from "./catalogAPI";

export const usersAPI = {
    getUser(email: string, password: string) {
       return instance.get<ResponseType<UserType[]>>(`users?email=${email}&password=${password}`)
            .then(response => response.data)
    },
    registrationUser(email: string, password: string){
        return instance.post<ResponseType<UserType>>(`users`, {email, password})
            .then(response => response.data)
    },
    addOrder(payload: OrderPayloadType){
        return instance.post<ResponseType<OrderType>>(`orders`, payload)
            .then(response => response.data)
    },
    getOrders(userID: string) {
        return instance.get<ResponseType<OrderType[]>>(`orders?userID=${userID}`)
            .then(response => response.data)
    }
}