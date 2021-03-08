import React from 'react';
import Footer from '../../components/elements/Footer/Footer';
import Hero from '../../components/elements/Hero/Hero'
import Copyright from '../../components/elements/Copyright/Copyright';
import { Login } from '../../components/features/Messages/Login/Login';
import Layout from '../../components/elements/Layout/Layout';
import { Grid } from '@material-ui/core';
export default function HomeScreen() {

    return (
        <>
            <Layout>
                <Grid container direction="column">
                    <Grid item >
                        <Hero />
                    </Grid>
                    <Grid item>
                        <Login />
                    </Grid>
                </Grid>
            </Layout>
            <Footer title="Netenders" subtitle="Admin Panel " />
            <Copyright />
        </>
    );
}
