import React from 'react';
import './users.scss';
import {Container} from "@mui/material";
import backImage from './../../assets/img/Rectangle.jpg';
import backImageWebp from './../../assets/img/Rectangle.webp';
import backImageWebp1024 from './../../assets/img/Rectangle_1020.webp';
import backImageWebp768 from './../../assets/img/Rectangle_768.webp';
import backImageWebp360 from './../../assets/img/Rectangle_360.webp';
import backImage1024 from './../../assets/img/Rectangle_1020.jpg';
import backImage768 from './../../assets/img/Rectangle_768.jpg';
import backImage360 from './../../assets/img/Rectangle_360.jpg';
import {MyButton} from "../../UI/buttons/MyButton";
import GetComponent from "../GetComponent/GetComponent";
import PostComponent from "../PostComponent/PostComponent";
import SuccessModal from "../Modal/SuccessModal";

const UserList = () => {

    return (
        <div>
            <div className="main-block">
                <picture className="background-image">
                    <source src={backImageWebp360} srcSet={`${backImageWebp360} 360w, ${backImageWebp768} 768w, ${backImageWebp1024} 1024w, ${backImageWebp}`}
                            sizes="(max-width: 360px) 360px, (max-width: 768px) 768px"/>
                    <img src={backImage360} srcSet={`${backImage360} 360w, ${backImage768} 768w, ${backImage1024} 1024w, ${backImage}`}
                         sizes="(max-width: 360px) 360px, (max-width: 768px) 768px"
                    />
                </picture>
                <div className="main-text-block">
                    <h1>Test assignment for front-end developer</h1>
                    <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                    <div>
                        <MyButton>Sign up</MyButton>
                    </div>
                </div>
            </div>
            <Container className={'my-container'}>
                <GetComponent />
                <PostComponent />
                <SuccessModal/>
            </Container>
        </div>
    );
};

export default UserList;