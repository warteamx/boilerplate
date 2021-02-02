import React, { ReactElement } from 'react'

import { useHistory } from "react-router-dom";

import { makeStyles, Typography, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import VisibilityIcon from '@material-ui/icons/Visibility';

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
  data: any,
  loading: boolean
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

export default function GnomesList({ data, loading }: Props): ReactElement {

  const classes = useStyles();
  let history = useHistory();

  // console.log(data)
  const handleClick = (e : any) => {
    console.log(e.currentTarget.id)
    history.push(`/altran/user/${e.currentTarget.id}`);
  }

  return (
    <>

      <Typography variant="h3">
        Gnomes in Brastlewark
        </Typography>
      <Grid container spacing={3}>

        {data?.map((element: any) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={element.id} >
            <Card className={classes.root}>
              <CardHeader
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
                  Height: {Math.round(element.height)} cm,
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Weight: {Math.round(element.weight)} kg
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Hair color: {element.hair_color}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="share" color="primary" onClick={handleClick} id={element.id}>
                  <VisibilityIcon  />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
