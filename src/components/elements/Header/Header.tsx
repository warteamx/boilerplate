import React, { ReactElement } from 'react'
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';


interface Props {
    link: string,
    linkText: string
    title: string

}
export default function Header({ link, linkText, title }: Props): ReactElement {


    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            marginBottom: theme.spacing(5)
        },
        icon: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1
        },
        link: {
            color: "#ffffff",
            display: "flex",
            textDecoration: "none",
            alignItems: "center",
            flexGrow: 1
        }
    }))

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="relative">
                <Toolbar >
                    <Button component={Link} to="/" className={classes.link}>
                        <CameraIcon className={classes.icon} />
                        <Typography variant="h6" className={classes.title} color="inherit" noWrap>
                            MERN APP - {process.env.REACT_APP_VERSION}
                        </Typography>
                    </Button>
                    <Typography variant="h6" className={classes.title} color="inherit" noWrap>
                        {title}
                    </Typography>
                    <Button color="inherit" href={link} target="_blank">{linkText}</Button>
                </Toolbar>

            </AppBar>
        </div>
    )
}

Header.defaultProps = {
    link: 'https://www.martinreboredo.com/',
    linkText: 'Martin',
    title: " "
}