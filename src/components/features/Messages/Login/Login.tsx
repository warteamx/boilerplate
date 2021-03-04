import React from 'react'

import { useHistory } from "react-router-dom";

import GoogleLogin from 'react-google-login';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';






export const Login = () => {
    let history = useHistory();

    const responseGoogle = (response: any) => {
        console.log(response);
    } 

    const handleLogin = async (googleData: any) => {
        const res = await fetch("/api/auth/", {
            method: "POST",
            body: JSON.stringify({
                token: googleData.tokenId
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        // store returned user somehow
        console.log(data)
        history.push('/checker')
    }

    return (
        <>
            <Grid container spacing={2} justify="center">
                    <Box m={5}>
                    <GoogleLogin
                        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
                        buttonText="Login with Google"
                        onSuccess={handleLogin}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    </Box>

            </Grid>

        </>

    )
}
