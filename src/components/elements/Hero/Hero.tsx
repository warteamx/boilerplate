import React from 'react';

import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(5),
  },
}));


export default function Album() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            (NAP)
            </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Netenders Administration Panel
            </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={5} justify="center">
              <Grid item>
                <Button component={Link} to={`/checker`} size="small" color="primary" variant="outlined" >
                  Health Check
                    </Button>
              </Grid>
              <Grid item>
                <Button component={Link} to={`/admin-panel`} size="small" color="primary" variant="contained" >
                  Go to admin panel
                    </Button>
              </Grid>

            </Grid>
            <Grid container spacing={2} justify="center">

            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
}