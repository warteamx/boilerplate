import React, { ReactElement, useState } from 'react'


import TextField from '@material-ui/core/TextField';


interface Props {
  filterBy: (name: string )=>void
}

export default function Filter({ filterBy }: Props): ReactElement {

  const [name, setName] = useState("")
  const handleChange = (event:  React.ChangeEvent<HTMLInputElement> ) => {
    setName(event.target.value);
    filterBy(event.target.value);
  };

  return (
    <div>
      <TextField id="filter-by-name" 
      value={name} onChange={handleChange}
      placeholder="Search by Gnome Name" />

    </div>
  )
}
