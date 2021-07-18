import React, { ReactElement, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router';

import { useAppSelector } from '../../../../hooks/hooks'

import fetchAPI from '../../../../utils/fetchAuth'
import AddFav from './AddFav'

import './ListView.css'


function ListView(): ReactElement {


    const { refetch, isLoading, isError, data, error } = useQuery('characters', () => fetchAPI("/api/characters/"))

    const [liked, setLiked] = useState(false)

   
    useEffect(() => {
        setLiked(false)
        refetch()
    }, [liked, refetch])

    const handleRefresh = () => {
        setLiked(true)
    }

    if (isLoading) return <> 'Loading...' </>

    if (error) return <>{
        `An error has occurred: You must be logged in'`
    }
    </>

    return (<>
        <div className="listView-container">
            {data?.data.results.map((char: any, i: any) =>
                <div key={char.id} className="listView-item">
                    <div className="card">
                        <div className="photo">
                            <img src={char.image} alt="" />
                        </div>
                        <div className="details">
                            <h3> {char.name}</h3>
                            <p> {char.species}</p>
                            <p> {char.status} </p>
                            <p> {char.gender}</p>
                            <p>{data.favs?.characterId.includes(char.id) ? "Liked" : "noLike"}</p>
                        </div>
                    </div>
                    <div>
                        <AddFav characterID={char.id} refresh={handleRefresh} liked={data.favs?.characterId?.includes(char.id) ? true : false} />
                    </div>
                </div>)}


        </div>
    </>
    )
}

export default ListView
