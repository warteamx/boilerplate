import React, { ReactElement ,useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import fetchAPI from '../../../../utils/fetchAuth'
import AddFav from './AddFav'

function ListView(): ReactElement {


    const { refetch, isLoading, isError, data, error } = useQuery('characters', () => fetchAPI("/api/characters/"))

    const [liked, setLiked] = useState(false)

    useEffect(() => {
        setLiked(false)
        refetch()
        }, [liked, refetch])

        const handleRefresh = ()=> {
            setLiked(true)
        }

    if (isLoading) return <> 'Loading...' </>

    if (error) return <>{
        `An error has occurred: You must be logged in'`
    }
    </>




    return (
        <div>
            Fetch sucessfully:

            {data?.data.results.map((char: any, i: any) =>
                <div key={char.id}>
                    <div>
                        <p>  {char.name}

                            <AddFav characterID={char.id} refresh={handleRefresh} liked={data.favs.characterId.includes(char.id) ? true : false}/>

                            {data.favs.characterId.includes(char.id) ? "Liked" : null}</p>

                    </div>
                </div>)}


        </div>
    )
}

export default ListView
