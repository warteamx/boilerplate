
import React, { ReactElement, useState } from 'react'

import useFetch from "react-fetch-hook";

import { makeStyles, Container, Box} from '@material-ui/core';
import GnomesList from '../elements/GnomeList/GnomeList';
import Pagination from '@material-ui/lab/Pagination';
import Filter from '../elements/Filter/Filter';


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

  // Pagination State 
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(4);
  const handlePageClick = (event: object, page: number) => {
    setOffset(page + 1)
  };

  // Fetching from url 
  const { isLoading, data, error }: any = useFetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json");

  // data to display
  let slice = data?.Brastlewark?.slice(offset, offset + perPage)

  // Filter data State
  const [gnomeSearch, setGnomeSearch] = useState({ name: "", age: [50, 350] })

  function getFilteredData(items: any) {


    let filtered = items?.filter((item: any) =>
      // Filter by name
      (item.name.toLowerCase().includes(gnomeSearch.name.toLowerCase()))
      //Filter by age
      &&
      (item.age >= gnomeSearch.age[0])
      &&
      (item.age <= gnomeSearch.age[1])
      // TODO: Filter by height, weight, hair color, 

    )
    return filtered
  }

  return (

    <div className={classes.root}>
      <Container maxWidth="xl">

        <Filter filterBy={(name, age) => setGnomeSearch({ name, age })} />

        {error ? "error" : null}

        {isLoading ? "loading" :
          <GnomesList loading={isLoading} data={getFilteredData(slice)} />}
  <Box p={5} >
  <Pagination 
            count={Math.ceil(data?.Brastlewark?.length / perPage)}
            onChange={handlePageClick}
            color="primary" 
            size="large"
            style={{display: "flex", justifyContent:"center"}} />
  </Box>


      </Container>
    </div>



  )
}

Gnomes.defaultProps = {
  title: "MERN APP",
  subtittle: "Starter Kit for MERN APP "
}