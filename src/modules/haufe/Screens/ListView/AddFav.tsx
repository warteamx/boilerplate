import React, { ReactElement } from 'react'

import { useQuery } from 'react-query'
import postAPI from '../../../../utils/postAuth'

interface Props {
  characterID: string,
  refresh: Function
  liked: Boolean
}

export default function AddFav({ characterID, refresh, liked}: Props): ReactElement {

  // console.log(data)

  const { data, refetch } = useQuery('favs', () => postAPI("/api/characters/favs", characterID), { enabled: false, refetchOnWindowFocus: false })

  const handleClick = (e: any) => {
    console.log(e.target.dataset.id)
    refetch()
    console.log(data)
    refresh()

  }
  return (
    <>
      <button onClick={handleClick}>
        <span role="img" aria-label="heart" data-id={characterID}> 💖</span>
        {liked ? "true" : "false"}
      </button>

    </>
  )
}
