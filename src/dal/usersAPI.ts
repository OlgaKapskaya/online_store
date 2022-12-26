import {instance} from "../common/utils/constants/api/instance";
import {UserType} from "../bll/types";
import {ResponseType} from "./catalogAPI";

export const usersAPI = {
    getUser(email: string, password: string) {
       return instance.get<ResponseType<UserType[]>>(`users?email=${email}&password=${password}`)
            .then(response => response.data)
    }
}