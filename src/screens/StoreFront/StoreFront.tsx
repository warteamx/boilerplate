import React from 'react';
import Footer from '../../components/elements/Footer/Footer';


import Copyright from '../../components/elements/Copyright/Copyright';

import { Box, Button, Card, Grid, Link, Paper } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import { UpdateBanner } from '../../modules/StoreFrontAdmin/UpdateBanner';
import EditIcon from '@material-ui/icons/Edit';
import Layout from '../../components/elements/Layout/Layout';

import { makeStyles } from '@material-ui/core/styles';

import storeFrontImg from '../../assets/storeFront-homePage.png'
import { Link as RouterLink } from 'react-router-dom';


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
    paper2: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper4: {
        padding: theme.spacing(4),
        margin: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper8: {
        padding: theme.spacing(8),
        margin: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper12: {
        padding: theme.spacing(12),
        margin: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper16: {
        padding: theme.spacing(16),
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
                    <Grid item sm={6}>
                        <Grid item >
                            <Paper elevation={1} className={classes.paper}>
                                <Link component={RouterLink} to='/admin-panel/store-front/top-ad-banner'>
                                    Top Ad Banner <EditIcon fontSize="inherit"  />
                                </Link>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper elevation={1} className={classes.paper}> Header  </Paper>
                        </Grid>
                        <Grid item>
                            <Paper elevation={2} className={classes.paper16}> Promote Banner  </Paper>
                        </Grid>
                        <Grid item>
                            <Paper elevation={1} className={classes.paper4}> Order Rating Pannel  </Paper>
                        </Grid>
                        <Grid item>
                            <Paper elevation={1} className={classes.paper16}> Categories  </Paper>
                        </Grid>
                        <Grid item>
                            <Paper elevation={1} className={classes.paper16}> Best Sellers  </Paper>
                        </Grid>
                        <Grid item>
                            <Paper elevation={1} className={classes.paper16}> Brands Panel   </Paper>
                        </Grid>
                        <Grid item>
                            <Paper elevation={1} className={classes.paper12}> Tags Block Pannel   </Paper>
                        </Grid>
                        <Grid item>
                            <Paper elevation={1} className={classes.paper16}> Footer  </Paper>
                        </Grid>
                    </Grid>
                    <Grid item sm={6}>
                        <img src={storeFrontImg} className={classes.responsive} />

                    </Grid>

                </Grid>
            </Layout>
            <Footer title="Netenders" subtitle="Admin Panel " />
            <Copyright />
        </>
    );
}
