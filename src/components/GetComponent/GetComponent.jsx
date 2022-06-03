import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import UserCard from "../UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { userAPI } from "../../actions/users";
import style from './GetComponent.module.scss'
import { MyButton } from "../../UI/buttons/MyButton";
import preloader from "../../assets/img/preloader.png";

const GetComponent = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const isFetching = useSelector(state => state.users.isFetching)
    const totalCount = useSelector(state => state.users.totalCount)
    const count = useSelector(state => state.users.Count)

    const [showButton, setShowButton] = useState(true)
    const [countUsers, setCountUsers] = useState(6)

    useEffect(() => {
        if (count === totalCount) {
            setShowButton(false)
        }
    }, [count, totalCount])

    const ShowMoreUsers = () => {
        setCountUsers(prevValue => prevValue + 6)

    }

    useEffect(() => {
        dispatch(userAPI.getUsers(1, countUsers))
    }, [dispatch, countUsers, setCountUsers])

    return (
        <div>
            <div>
                <Typography className={style.title} component="h1" variant="h4">Working with GET request</Typography>
            </div>
            <div className={style.card_wrapper}>
                {
                    users.sort((a, b) => a.registration_timestamp < b.registration_timestamp ? 1: -1).map(user =>
                        <UserCard key={user.id} user={user} />)
                }
            </div>
            <div style={{ textAlign: 'center', marginTop: '34px' }}>
                {
                    !isFetching ?
                        showButton &&
                        <MyButton style={{width: 120}} onClick={ShowMoreUsers}>Show more</MyButton>
                        :
                        <div><img src={preloader} alt="preloader" className={style.preloader} /></div>
                }

            </div>
        </div>
    );
};

export default GetComponent;