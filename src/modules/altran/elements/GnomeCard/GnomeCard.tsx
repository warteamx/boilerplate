import React, { ReactElement } from 'react'


import { makeStyles, Typography, Grid } from '@material-ui/core';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert'

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

interface Props {
  data: any
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function GnomesList({ data }: Props): ReactElement {

  const classes = useStyles();

  // console.log(data)

  return (
    <Grid container spacing={3}>
      {data?.map((element : any) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={element.id} >
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
          </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={element.name}
              subheader={`${element.age} years old`}
            />
            <CardMedia
              className={classes.media}
              image={element.thumbnail}
              title={element.name}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Height: {Math.round(element.height)} cm, Weight: {Math.round(element.weight)} kg, Hair color: {element.hair_color}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Friends : {element.friends.toString()}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>

  )
}
