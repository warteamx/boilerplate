import React from 'react';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import Icon from '@material-ui/core/Icon';


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
  heading: "Store Front Admin",
  description: "Change Layouts, Banners , Widgets",
  icon: "store-front",
  path: "store-front",
  disabled: false
},
{
  id: 2,
  heading: "Reports",
  description: "Get Finance and Mk reports",
  icon: "trending_up",
  path: "reports",
  disabled: false
},{
  id: 3,
  heading: "Products Admin",
  description: "Add and delete products",
  icon: "backup",
  path: "axpel",
  disabled: true
},{
  id: 4,
  heading: "SEO Admin",
  description: "Change h1, h2 titles, meta tags, structured data",
  icon: "spellcheck",
  path: "shipwerk",
  disabled: true
},{
  id: 5,
  heading: "User Admin",
  description: "User adminstration ... ",
  icon: "manage_accounts",
  path: "altran",
  disabled: true
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
                <CardHeader avatar={ <Icon fontSize="large" color="primary">{card.icon}</Icon>  }  />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.heading}
                  </Typography>
                  <Typography>
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button component={Link} to={`/admin-panel/${card.path}`} size="small" color="primary" variant="contained" disabled={card.disabled}>
                    Go In
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