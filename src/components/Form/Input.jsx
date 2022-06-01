import React, { forwardRef } from 'react';
import style from "../PostComponent/PostComponent.module.scss";
import { TextField } from "@mui/material";

const Input = forwardRef((props, ref) => {

    return (
        <TextField fullWidth
            required
            inputRef={ref}
            {...props}
            className={style.input}
            variant="outlined"
            sx={{
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
                    width: '380px',
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
            }}
        />
    );
});

export default Input;