
import React, { useState } from 'react'
import useFetch from "react-fetch-hook";

import { Button, Container, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            padding: theme.spacing(1)
        },
    },
    inputs: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(3),

    },
    paper: {
        flex: 1,
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));

export const UpdateBanner = () => {
    const classes = useStyles();

    const { isLoading, data, error } = useFetch("/api/test/");

    const [title, setTitle] = useState("");

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };

    const [color, setColor] = useState("");
    const handleColor = (event) => {
        setColor(event.target.value);
    };

    const [link, setLink] = useState("");
    const handleLink = (event) => {
        setLink(event.target.value);
    };

    console.log(data)

    const handleSubmit = (event) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, color, link })
        };
        fetch('/api/test/', requestOptions)
            .then(res => res.json())
            .then(thing => console.log("response post", thing))
    }

    return isLoading ? (<div> ... Loading </div>) :
        (<Container maxWidth="sm">

            <form className={classes.root}>
                <Grid container spacing={3} >
                    <Paper className={classes.paper}>
                        <h2> Top Banner Admin</h2>
                        <Grid item xs={12} >

                            <TextField size="medium" fullWidth
                                className={classes.inputs}
                                label="Title of the Banner"
                                helperText={data.test[0].title}
                                value={title} onChange={handleTitle}
                            />



                        </Grid>
                        <Grid item xs={12}  >

                            <TextField size="medium" fullWidth
                                className={classes.inputs}
                                label="Color of the Banner"
                                helperText={data.test[0].color}
                                value={color}
                                onChange={handleColor} />
                        </Grid>
                        <Grid item xs={12} >

                            <TextField size="medium" fullWidth
                                className={classes.inputs}
                                label="Link of the Banner"
                                helperText={data.test[0].link}
                                value={link} onChange={handleLink} />


                        </Grid>
                        <Button variant="contained" color="primary" onClick={handleSubmit}> Save </Button>
                    </Paper>
                </Grid>

            </form>

        </Container>

        )
}
