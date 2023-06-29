import React, { useState, useEffect } from 'react';
import { Container, Link, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import ViewSpecimen from './ViewSpecimen';
import NavigationBar from './NavigationBar';

export const HomePage = () => {
    const navigate = useNavigate();
    const [viewSpecimen, setViewSpecimen] = useState<boolean>(false);

    useEffect(() => {
        const user = Cookies.get('user');
        const role = Cookies.get('role');
        if (!user || !role) navigate('/tamuic/login')
    },[])

    const toggleViewSpecimen = () =>{
        setViewSpecimen(!viewSpecimen)
    }

    return(
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Typography variant='h4'> Welcome to TamuIC app.</Typography>
            <NavigationBar />
            <Link onClick={toggleViewSpecimen}>
                <Typography variant='body1'>View Specimen</Typography>
            </Link>
            {viewSpecimen && <ViewSpecimen setViewSpecimen={setViewSpecimen}/>}
        </Container>
    )
}

export default HomePage;