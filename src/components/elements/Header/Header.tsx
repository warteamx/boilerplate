import React, { ReactElement } from 'react'
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';


export default function Header(): ReactElement {

    console.log(process.env.REACT_APP_VERSION)
    const useStyles = makeStyles((theme) => ({
        icon: {
            marginRight: theme.spacing(2),
        }
    }))

    const classes = useStyles();
    return (
        <AppBar position="relative">
            <Toolbar >
                <CameraIcon className={classes.icon} />
                <Typography variant="h6" color="inherit" noWrap>
                    MERN APP - { process.env.REACT_APP_VERSION}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}