import axios from "axios";
import {setCount, setIsFetching, setNewUser, setPositions, setTotalCount, setUsers} from "../reducers/usersReducers";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import successImage from "../assets/img/success-image.jpg";
import {Typography} from "@mui/material";


const instance = axios.create({
    baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1/",
});

const MySwal = withReactContent(Swal);

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    title:{
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '40px',
        lineHeight: '40px',
        textAlign: 'center',
        paddingBottom: '50px',
    },
    img:{
        maxWidth: 328,
        width: '100%',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
    }
};


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
                    MySwal.fire({
                        icon: 'success',
                        width: 800,
                        imageUrl: successImage,
                        title: <Typography sx={style.title} component="h1" variant="h4">User successfully registered</Typography>,
                        footer: "© abz.agency specially for the test task",
                        confirmButtonColor: '#00BDD3',
                        onOpen: () => {
                            setTimeout(() => MySwal.clickConfirm(), 2500);
                        }
                    })
                })
            }))

        }catch (e){
            return e.error
        }

    }
}

