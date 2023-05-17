import React from 'react';
import { Link, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom';

export const HomePage = () => {

    return(
        <>
            <Typography> Welcome to TamuIC app.</Typography>
            <Link component={NavLink} to='/viewspecimen'>
                View Specimen
            </Link>
        </>
    )
}

export default HomePage;