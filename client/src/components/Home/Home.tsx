import React, { useState, useEffect } from 'react';
import { Container, Link, Typography, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import NavigationBar from '../NavigationBar';
import './../css/Home.css';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = Cookies.get('user');
    const role = Cookies.get('role');
    if (!user || !role) navigate('/tamuic/login');
  }, []);

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4"> Welcome to TamuIC app.</Typography>
      <NavigationBar />
      <div className="mainContent">
        <Outlet></Outlet>
      </div>
    </Container>
  );
};

export default HomePage;
