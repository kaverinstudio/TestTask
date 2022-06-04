import React, {forwardRef, useEffect} from 'react';
import style from "../PostComponent/PostComponent.module.scss";
import { TextField } from "@mui/material";
import $ from "jquery";
import 'jquery-mask-plugin/dist/jquery.mask.min.js';


const MyPhoneInput = forwardRef((props, ref) => {

    useEffect(() =>{
        $('input[name=phone]').mask('+38 (999) 999-99-99', {
            placeholder: '+38 (999) 999-99-99'
        });
    },[])


    const inputStyle = {
        '& label.Mui-focused': {
            color: '#7E7E7E',
        },
        '& .MuiOutlinedInput-root': {
            fontFamily: 'Nunito',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '26px',
            color: '#000000',
            width: '100%',
            height: '54px',
            borderRadius: '4px',
            '& fieldset': {
                borderColor: '#D0CFCF',
            },
            '&:placeholder': {
                color: 'red',
            },
            '&:hover fieldset': {
                borderColor: '#D0CFCF',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#D0CFCF',
            },
        },
        '& .MuiFormHelperText-root':{
            position: 'absolute',
            bottom: '-25px',
        }
    }

    return (
            <TextField
        fullWidth
        required
        {...props}
        inputRef={ref}
        className={style.input}
        variant="outlined"
        sx={inputStyle}
            />

    );
});

export default MyPhoneInput;