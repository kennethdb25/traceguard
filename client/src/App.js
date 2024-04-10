/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'antd/dist/antd';
import { Layout } from 'antd';
import { LoginContext } from './Context/Context';
import LoginContent from './Components/Login/LoginContent';
import Home from './Components/Home/Home';
import History from './Components/History/History';
import MainHeader from './Components/Common/MainHeader';
import Terms from './Components/Terms/Terms';
import Categories from './Components/Categories/Categories';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import './App.css';
import PageNotFound from './Components/PageNotFound/PageNotFound';
const { Footer } = Layout;

const App = () => {
  const { userData, setUserData } = useContext(LoginContext);
  const [data, setData] = useState('');
  const history = useNavigate();
  const width = window.innerWidth;

  const ValidLogin = async () => {
    if (localStorage.getItem('userToken')) {
      let validToken = localStorage.getItem('userToken');
      const res = await fetch('/api/valid', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: validToken,
        },
      });

      const data = await res.json();
      console.log(data);
      if (data.status === 401 || !data || data.status === 404 || !validToken) {
        console.log(data.error);
        history('/*');
      } else {
        console.log('Verified User');
        setUserData(data);
        history('/home');
      }
    } else {
      setData(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      ValidLogin();
    }, 3000);
    setTimeout(() => {
      setData(true);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      {data ? (
        <>
          <MainHeader setData={setData} width={width} />
          <Routes>
            <Route path='/' element={<LoginContent ValidLogin={ValidLogin} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/history' element={<History />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
          <div>
            <Footer
              key='footerMain'
              style={{
                textAlign: 'center',
              }}
            >
              Traceguard: Evidence Tracker ©{new Date().getFullYear()} Created by HAU Forensic Student
            </Footer>
          </div>
        </>
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          Loading Traceguard &nbsp;
          <CircularProgress />
        </Box>
      )}
    </Layout>
  );
};
export default App;
