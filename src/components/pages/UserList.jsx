import React from 'react';
import './users.scss'
import {Container} from "@mui/material";
import backImage from './../../assets/img/Rectangle.jpg'
import {MyButton} from "../../UI/buttons/MyButton";
import GetComponent from "../GetComponent/GetComponent";
import PostComponent from "../PostComponent/PostComponent";

const UserList = () => {



    return (
        <div>
            <div className="main-block" style={{backgroundImage:`url(${backImage})`}}>
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
            </Container>
        </div>
    );
};

export default UserList;