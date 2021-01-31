
import React, { ReactElement, useState } from 'react'

import useFetch from "react-fetch-hook";

import { makeStyles } from '@material-ui/core';
import GnomesList from '../elements/GnomeCard/GnomeCard';
import Pagination from '@material-ui/lab/Pagination';

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

interface apiData {
  Brastlewark: Array<GnomeData>
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Gnomes(): ReactElement {
  const classes = useStyles();

  const [offset, setOffset] = useState(0);
  const [perPage] = useState(12);

  const handlePageClick = (event: object, page: number) => {
    setOffset(page + 1)
  };

  const { isLoading, data, error }: any = useFetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json");

  let slice = data?.Brastlewark?.slice(offset, offset + perPage)


  return (

    <div className={classes.root}>

      {isLoading ? "loading" :
        <GnomesList data={slice} />}
      <Pagination
        count={Math.ceil(data?.Brastlewark?.length / perPage)}
        onChange={handlePageClick}
        color="primary" />

    </div>

  )
}

Gnomes.defaultProps = {
  title: "MERN APP",
  subtittle: "Starter Kit for MERN APP "
}