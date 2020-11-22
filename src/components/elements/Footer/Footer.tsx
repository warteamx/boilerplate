import { Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'

interface Props {
  title: string,
  subtitle: string
}

export default function Footer({ title, subtitle }: Props): ReactElement {
  return (

    <footer>
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
