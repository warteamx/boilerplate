import React from 'react';

import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button, Card, CardContent, CardActions, CardMedia, Box } from '@material-ui/core';

import axpel from '../../../modules/axpel/logo-xl-1.png';
import altran from '../../../modules/altran/logo.svg';
import netenders from '../../../modules/netenders.png';


const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(5),
  },
  card: {
    width: 250,
  },
  media: {
    height: 110,
    padding: 10,
    width: "100%",
  }
}));


export default function Album() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            (MERN)
            </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Boilerplate code for MERN Apps
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
              <Grid item >
                <Card className={classes.card}>
                  <CardContent>
                    <Typography>
                      Technical Test
                    </Typography>
                    <Box mt={2} style={{backgroundColor: "black"}}  className={classes.media} >
                    <img src={axpel} alt="axpel" style={{width: "100%"}} />
                    </Box>

                  </CardContent>
                  <CardActions>
                    <Button component={Link} to={`/axpel`} >Let´s see it</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item  >
                <Card className={classes.card}>
                  <CardContent>
                    <Typography>
                      Technical Test
                    </Typography>
                    <Box mt={2} className={classes.media}>
                    <img src={altran} className={classes.media} alt="altran" />
                    </Box>

                  </CardContent>
                  <CardActions>
                    <Button component={Link} to={`/altran`} >Let´s see it</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item  >
                <Card className={classes.card}>
                  <CardContent>
                    <Typography>
                      Admin Panel
                    </Typography>
                    <Box mt={2} >
                    <img src={netenders} className={classes.media} alt="netenders" />
                    </Box>

                  </CardContent>
                  <CardActions>
                    <Button component={Link} to={`/admin-panel`} >Let´s see it</Button>
                  </CardActions>
                </Card>
              </Grid>

            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
}