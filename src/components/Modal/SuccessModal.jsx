import React, {useEffect, useState} from 'react';
import {Box, Modal, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import successImageWebp from "../../assets/img/success-image.webp";
import successImage from "../../assets/img/success-image.jpg";


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
        marginLeft: '50%',
        transform: 'translateX(-50%)',
    }
};

const SuccessModal = () => {
    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);

    const user = useSelector(state => state.users.new_user)

    useEffect(()=>{
        setOpen(user);
        setTimeout(handleClose, 5000);
    },[user])

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={style.title} component="h1" variant="h4">User successfully registered</Typography>
                    <picture>
                        <source sx={style.img} srcSet={successImageWebp} type="image/webp"/>
                        <source sx={style.img} srcSet={successImage} type="image/jpeg"/>
                        <img sx={style.img} src={successImage} alt=""/>
                    </picture>
                </Box>
            </Modal>
        </div>
    );
};

export default SuccessModal;