import React, { ReactElement, useState, useEffect } from 'react'


import TextField from '@material-ui/core/TextField';
import { Grid, Slider, Typography, Paper, Box } from '@material-ui/core';


interface Props {
  filterBy: (name: string, age: any) => void
}

// Aria Value Text 
function valuetext(value: number) {
  return `${value} years old`;
}

export default function Filter({ filterBy }: Props): ReactElement {

  const [name, setName] = useState("")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const [age, setAge] = useState([50, 350]);

  const handleAgeChange = (event: any, newValue: any) => {
    setAge(newValue);
  };

  useEffect(() => {
    filterBy(name, age);
  }, [name, age])

  return (
    <Paper elevation={0} style={{ padding: 30 }} >
      <Grid container spacing={10} >
        <Grid container item xs={6} spacing={0}>
            <TextField id="filter-by-name" fullWidth
              value={name} onChange={handleChange}
              placeholder="Search by Gnome Name" />
        </Grid>
        <Grid container item xs={6} spacing={5} >
          <Typography id="discrete-slider-small-steps" gutterBottom>
            Choose Age (50-350)
        </Typography>
            <Slider
              value={age}
              onChange={handleAgeChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              max={350}
              min={50}
            />
        </Grid>

      </Grid>
    </Paper>
  )
}
