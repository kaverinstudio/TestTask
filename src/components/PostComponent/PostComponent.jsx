import React, {useEffect} from 'react';
import * as yup from 'yup'
import style from "./PostComponent.module.scss";
import {Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import { MyButton } from "../../UI/buttons/MyButton";
import Form from "../Form/Form";
import Input from "../Form/Input";
import RadioButton from '../Form/RadioButton';
import { yupResolver } from "@hookform/resolvers/yup";
import FileInput from "../Form/FileInput";
import {userAPI} from "../../actions/users";
import {useDispatch, useSelector} from "react-redux";
import MyPhoneInput from "../Form/PhoneInput";


const PostComponent = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.users.new_user)

    const schema = yup.object().shape({
        name: yup.string().required('Поле не может быть пустым')
            .min(2, 'Количество символов не может быть меньше 2')
            .max(60, 'Количество символов не может быть больше 60'),
        email: yup.string()
            .required('Поле не может быть пустым')
            .min(2, 'Количество символов не может быть меньше 2')
            .max(100, 'Количество символов не может быть больше 100')
            .email("Введите действительный Email адрес"),
        phone: yup.string()
            .required('Поле не может быть пустым')
            .matches(/^\+38 \(\d{3}\) \d{3}-?\d{2}-?\d{2}$/, 'Номер должен быть в формате: +38 (0XX) XXX - XX - XX'),
        photo: yup.mixed()
            .test("required", 'Файл не выбран', (value) => {
                photoSelected(value)
                if (value.length === 0){
                    return false
                }
                return true
            })
            .test("fileSize", "Файл не должен быть дольше 5 mB", (value) => {
                if(value && value.length > 0){
                    return value && value[0].size <= 5000000;
                }
            })
            .test('Тип файла', 'Не поддерживаемый тип файла', function (value) {
                if(value.length > 0){
                    const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg'];
                    return SUPPORTED_FORMATS.includes(value[0].type)
                }

            })
    })

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid,
        },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        criteriaMode: "firstError",
        shouldFocusError: true,
        shouldUnregister: true,
    });

    const onSubmit = (e) => {

        let tel = e.phone.replaceAll(/[^\d]/g, "");

        const formData = new FormData();
        formData.append('photo', e.photo[0])
        formData.append('name', e.name)
        formData.append('email', e.email)
        formData.append('phone', '+' + tel)
        formData.append('position_id', e.position_id)
        userAPI.postUser(formData, dispatch)

        reset()
        document.getElementById('photo-load-text').innerText = 'Upload your photo';
        document.querySelector('input[name=phone]').placeholder = 'Phone';
    }

    useEffect(() => {
        dispatch(userAPI.getUsers(1, 6))
    }, [dispatch, user])

    const photoSelected = (file) => {
        if(file.length > 0){
            let fileName = file[0].name
            if (fileName){
                document.getElementById('photo-load-text').innerText = fileName
            }
        }
    }

    return (
        <div style={{paddingBottom: "100px"}}>
            <div>
                <Typography className={style.title} component="h1" variant="h4">Working with POST request</Typography>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.form}>
                    <Input
                        {...register('name')}
                        label="Your name"
                        id="name"
                        type="text"
                        name="name"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                    />
                    <Input
                        {...register('email')}
                        label="Email"
                        id="email"
                        type="text"
                        name="email"
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                    />
                    <MyPhoneInput
                        {...register('phone')}
                        label="Phone"
                        id="phone"
                        type="tel"
                        name="phone"
                        error={!!errors.phone}
                        helperText={errors.phone?.message? errors.phone?.message : '+38 (XXX) XXX - XX - XX'}

                    />
                    <RadioButton
                        aria-labelledby="position_id"
                        name="position_id"
                        id="position_id"
                        {...register('position_id')}
                    />
                    <FileInput
                        {...register('photo')}
                        name="photo"
                        id="photo"
                        message={errors.photo?.message}
                        style={{ display: 'none' }}
                    />
                </div>

                <div className={style.formBtn}>
                    <MyButton disabled={!isValid}>Sign up</MyButton>
                </div>
            </Form>
        </div>
    );
};

export default PostComponent;