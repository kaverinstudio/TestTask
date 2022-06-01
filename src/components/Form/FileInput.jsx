import React, {forwardRef} from 'react';
import style from "../PostComponent/PostComponent.module.scss";
import {Button} from "@mui/material";
import Input from "./Input";


const FileInput = forwardRef((props, ref) => {

        const el1 = document.getElementById('file_input');
        const el2 = document.getElementById('upload_photo');

        if (el1 && el2){
            if (props.message){
                el1.style.border = "1px solid #d32f2f";
                el2.style.border = "1px solid #d32f2f";
            }
            else {
                el1.style.border = "1px solid #D0CFCF";
                el2.style.border = "1px solid rgba(0, 0, 0, 0.87)";
            }
        }

    return (
        <div className={style.file_input} >
            <Input
                type="file"
                {...props}
                inputRef={ref}
                style={{ display: 'none' }}
            />
            <label htmlFor="photo">
                <Button id="file_input" variant="raised" component="span" className={style.button}>
                    <span className={style.upload_photo} id="upload_photo">Upload</span>
                    <span id="photo-load-text" className={style.load_text}>Upload your photo</span>
                </Button>
            </label>
            <p className={style.error_message}>{props.message}</p>
        </div>
    );
});


export default FileInput;