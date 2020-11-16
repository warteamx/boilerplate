import { Box, Link, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react'


export default function Copyright(): ReactElement {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'No Copyright ©'}  {new Date().getFullYear()}
            <Link color="inherit" href="https://martinreboredo.com/">
                Martin Reboredo
                </Link>
            <Box component="span" display="inline" data-testid="date">
                {new Date().getFullYear()}
            </Box>
        </Typography>
    );
}
