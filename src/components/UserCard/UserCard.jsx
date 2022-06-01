import React from 'react';
import style from './UserCard.module.scss'
import {Avatar, Tooltip, tooltipClasses} from "@mui/material";
import {styled} from "@mui/material/styles";
const UserCard = (props) => {
    const user = props.user
    const MyTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))({
        [`& .${tooltipClasses.tooltip}`]: {
            background: '#000000',
            borderRadius: '4px',
            fontFamily: 'Nunito',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '26px',
        },
    });
    return (
        <div className={style.card_body}>
            <div className={style.img_wrapper}>
                <Avatar
                alt={user.name}
                src={user.photo}
                sx={{width:70, height:70}}
                />
            </div>
            <div>
                <MyTooltip title={user.name}>
                <p className={style.name}>{user.name}</p>
                </MyTooltip>
            </div>
            <MyTooltip title={user.position}>
            <div className={style.position}>{user.position}</div>
            </MyTooltip>
            <MyTooltip title={user.email}>
            <div className={style.email}>{user.email}</div>
            </MyTooltip>
            <MyTooltip title={user.phone}>
            <div>{user.phone}</div>
            </MyTooltip>
        </div>
    );
};

export default UserCard;