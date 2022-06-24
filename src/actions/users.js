import axios from "axios";
import {setCount, setIsFetching, setNewUser, setPositions, setTotalCount, setUsers} from "../reducers/usersReducers";


const instance = axios.create({
    baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1/",
});

export const userAPI = {

    getUsers (currentPage, perPage) {
        return async (dispatch) => {
            try {
                dispatch(setIsFetching(true))
                const response = await instance.get(`users?page=${currentPage}&count=${perPage}`)
                dispatch(setUsers(response.data))
                dispatch(setTotalCount(response.data))
                dispatch(setCount(response.data))
                dispatch(setIsFetching(false))

            } catch (e){
                dispatch(setIsFetching(false))
            }

        }
    },
    getPositions(){
        return async (dispatch) =>{
            const positions = await instance.get('positions ')
            dispatch(setPositions(positions.data.positions))
        }

    },

    postUser(formData, dispatch){
        try {
            instance.get('token').then(response => response.data.token).then((value => {
                instance.post('users', formData,{
                    headers:{
                        'Token': value
                    }
                }).then(response => {
                    dispatch(setNewUser(response.data.success))
                })
            }))

        }catch (e){
            return e.error
        }

    }
}

