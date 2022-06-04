import React from 'react';
import style from './UserCard.module.scss'
import {Avatar, Tooltip, tooltipClasses} from "@mui/material";
import {styled} from "@mui/material/styles";
import avatar from './../../assets/img/photo-cover.svg'
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

    let phone = user.phone;
    let lenPhone = phone.length;
    let tt=phone.split('');
    if(lenPhone === 12){
        tt.splice(2,"", " (");
        tt.splice(6,"", ") ");
        tt.splice(10,"", " ");
        tt.splice(13,"", " ");
    }else if(lenPhone === 13){
        tt.splice(3,"", " (");
        tt.splice(7,"", ") ");
        tt.splice(11,"", " ");
        tt.splice(14,"", " ");
    }
    let newtel = tt.join('');

    return (
        <div className={style.card_body}>
            <div className={style.img_wrapper}>
                <Avatar
                alt={user.name}
                src={user.photo? user.photo : avatar}
                sx={{width:70, height:70}}
                />
            </div>
            <div>
                <MyTooltip followCursor={true} title={user.name}>
                <p className={style.name}>{user.name}</p>
                </MyTooltip>
            </div>
            <MyTooltip followCursor={true} title={user.position}>
            <div className={style.position}>{user.position}</div>
            </MyTooltip>
            <MyTooltip followCursor={true} title={user.email}>
            <div className={style.email}>{user.email}</div>
            </MyTooltip>
            <MyTooltip followCursor={true} title={newtel}>
            <div className={style.phone}>{newtel}</div>
            </MyTooltip>
        </div>
    );
};

export default UserCard;