import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from './components/pages/UserList'
import { AppBar, Container, Grid } from "@mui/material";
import './app.css'
import { MyButton } from "./UI/buttons/MyButton";
import logo from './assets/img/Logo.svg';

function App() {
  return (
    <div className="wrapper">
      <AppBar position={'static'} className={'header-main'}>
        <Container className={'my-container'}>
          <Grid container spacing={0}>
            <Grid item xs={3}>
              <img src={logo} alt={'logo'} style={{ marginTop: 17, width: 104 }} />
            </Grid>
            <Grid item xs={9} display={'flex'} justifyContent={'flex-end'} alignItems={'baseline'}>
              <MyButton style={{margin: '13px 0 0 10px'}}>Users</MyButton>
              <MyButton style={{margin: '13px 0 0 10px'}}>Sign up</MyButton>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
