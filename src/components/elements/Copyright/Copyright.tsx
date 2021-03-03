import { Box, Link, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react'


export default function Copyright(): ReactElement {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '} 
            <Link color="inherit" href="https://www.netenders.com/">
                Netenders Corp. 
                </Link>
            <Box component="span" display="inline" data-testid="date" ml={1}>
                {new Date().getFullYear()}
            </Box>
        </Typography>
    );
}
