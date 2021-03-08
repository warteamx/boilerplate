import React from 'react';
import Footer from '../../../components/elements/Footer/Footer';

import Copyright from '../../../components/elements/Copyright/Copyright';

import { Box, Button, Card, Grid, Paper } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import { UpdateBanner } from '../../../modules/StoreFrontAdmin/UpdateBanner';
import Layout from '../../../components/elements/Layout/Layout';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    responsive: {
        maxWidth: '100%',
    }
}));

export default function StoreFront() {
    const classes = useStyles();
    return (
        <>
            <Layout>
                <Grid container direction="row" spacing={3}>
                    <UpdateBanner />
                </Grid>
            </Layout>
            <Footer title="Netenders" subtitle="Admin Panel " />
            <Copyright />
        </>
    );
}
