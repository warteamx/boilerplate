import React, { ReactElement, useEffect, useState } from 'react'

import useFetch from "react-fetch-hook";

import { useParams, useHistory } from "react-router-dom";

import { makeStyles, Typography, Grid, Container, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Header from '../../../components/elements/Header/Header';
import Footer from '../../../components/elements/Footer/Footer';


interface GnomeData {
  age: number,
  friends: Array<string>,
  hair_color: string,
  height: number,
  id: string,
  name: string,
  professions: Array<string>,
  thumbnail: string,
  weight: number
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function GnomeCard(): ReactElement {
  const classes = useStyles();
  let params = useParams<any>();
  let history = useHistory();
  // Fetching from url to simulate real API call
  const { isLoading, data, error }: any = useFetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json");

  const [gnome, setGnome] = useState<GnomeData | any>()

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    setGnome(data?.Brastlewark?.filter((item: any) => item.id == params?.id)[0])
  }, [data, params])

  const handleClick = (e: any) => {
    history.push(`/altran/`);
  }

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Button onClick={handleClick}> Go back </Button>

{error ? "error" : null}

        {isLoading ? "loading" :
          <Grid item xs={12} >
            <Card className={classes.root}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={gnome?.name}
                subheader={`${gnome?.age} years old`}
              />
              <CardMedia
                className={classes.media}
                image={gnome?.thumbnail}
                title={gnome?.name}
              />

              <CardContent>
                <Typography variant="body2" color="textPrimary" component="p">
                  Height: {Math.round(gnome?.height)} cm,
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Weight: {Math.round(gnome?.weight)} kg
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Hair color: {gnome?.hair_color}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Friends: {gnome?.friends.toString()}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Professions: {gnome?.professions.toString()}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="share" color="primary">
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

        }


      </Container>
      <Footer subtitle="Altran" />
    </>
  )
}
