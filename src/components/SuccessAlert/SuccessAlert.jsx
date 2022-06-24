import React from 'react';
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import successImage from "../../assets/img/success-image.jpg";
import {Typography} from "@mui/material";
import {useSelector} from "react-redux";

function SuccessAlert() {
    const user = useSelector(state => state.users.newUser)

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

    if (user){
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
    }

}

export default SuccessAlert;