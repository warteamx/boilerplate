
import React, { ReactElement } from 'react'

import { makeStyles, Typography  } from '@material-ui/core';

interface Props {
  title: string,
  subtitle: string
}

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
      marginTop: 'auto',
}}))

export default function Footer({ title, subtitle }: Props): ReactElement {
  const classes = useStyles();
  return (

    <footer className={classes.root}>
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        {subtitle}
      </Typography>
    </footer>

  )
}

Footer.defaultProps = {
  title: "MERN APP",
  subtittle: "Starter Kit for MERN APP "
}
