import React from 'react';
import Footer from '../../../components/elements/Footer/Footer';
import Header from '../../../components/elements/Header/Header'

import Copyright from '../../../components/elements/Copyright/Copyright';

import { Grid } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';

export default function StoreFront() {

    return (
        <>
            <Header />
            <Grid container direction="column" justify="center" alignContent="center" alignItems="center">
            <h1> Store Front Panel </h1>
            <WarningIcon fontSize="large" color="error"/>
            <p> Work in Progress </p>
            </Grid>


            
            <Footer title="Netenders" subtitle="Admin Panel " />
            <Copyright />
        </>
    );
}
