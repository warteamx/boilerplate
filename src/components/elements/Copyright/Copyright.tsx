import { Link, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react'


export default function Copyright(): ReactElement {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'No Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                MERN APP
                </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
