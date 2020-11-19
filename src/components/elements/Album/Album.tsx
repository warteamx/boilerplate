import React from 'react';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [{
  id: 1,
  heading: "Airbnb",
  description: "Sample data from MongoDB containing Listings and Reviews scrapped from Airbnb",
  image: "airbnb",
  path: "airbnb",
  disabled: true
},
{
  id: 2,
  heading: "Shipwreks",
  description: "Sample data from MongoDB containing Ship Wreks Geospatial Information",
  image: "shipwerk",
  path: "shipwerk",
  disabled: true
},
{
  id: 3,
  heading: "Others",
  description: "Sample data from MongoDB containing weather data, supplies, restaurants, etc..",
  image: "others",
  path: "others",
  disabled: true
},{
  id: 4,
  heading: "Axpel",
  description: "Technical test for Axpel consulting.",
  image: "axpel",
  path: "axpel",
  disabled: false
}]

export default function Album() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`https://picsum.photos/seed/${card.image}/200/300`}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.heading}
                  </Typography>
                  <Typography>
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button component={Link} to={`/${card.path}`} size="small" color="primary" disabled={card.disabled}>
                    See
                    </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}