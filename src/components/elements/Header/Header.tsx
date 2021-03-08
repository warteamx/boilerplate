import React, { ReactElement } from 'react'
import AppBar from '@material-ui/core/AppBar';
import SettingsIcon from '@material-ui/icons/Settings';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';


interface Props {
    link: string,
    linkText: string,
    title: string,
    handleDrawerToogle: any

}
export default function Header({ link, linkText, title, handleDrawerToogle }: Props): ReactElement {

    const useStyles = makeStyles((theme) => ({
        root: {
            marginBottom: theme.spacing(5),
            flexGrow: 1,
            flexDirection: "row"
        },
        grow: {
            flexGrow: 1,
        },
        icon: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1
        },
        toolbar: {
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
        <div className={classes.grow}>
            <AppBar position="sticky" className={classes.root}>
                <Toolbar className={classes.toolbar}
                    onClick={handleDrawerToogle} >
                    <SettingsIcon className={classes.icon} />
                </Toolbar>
                <Button component={Link} to="/" className={classes.link}>
                    <Typography variant="h6" className={classes.title} color="inherit" noWrap>
                        Netenders - {process.env.REACT_APP_VERSION}
                    </Typography>
                </Button>
                <Typography variant="h6" className={classes.title} color="inherit" noWrap>
                    {title}
                </Typography>
                <Button color="inherit" href={link} target="_blank">{linkText}</Button>
            </AppBar>
        </div>
    )
}

Header.defaultProps = {
    link: 'https://www.netenders.com/',
    linkText: ' User ',
    title: " ",
    handleDrawerToogle: () => { }
}