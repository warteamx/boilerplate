import React, { ReactElement, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router';

import { useAppSelector } from '../../../../hooks/hooks'

import fetchAPI from '../../../../utils/fetchAuth'
import AddFav from './AddFav'
import Pagination from './Pagination'
import './ListView.css'


function ListView(): ReactElement {


    const [page, setPage] = useState(1)


    const { refetch, isLoading, isError, data, error, isFetching, isPreviousData } = useQuery(['characters', page], () => fetchAPI(`/api/characters/?page=${page}`), { keepPreviousData: true })

    const [liked, setLiked] = useState(false)


    useEffect(() => {
        setLiked(false)
        refetch()
    }, [liked, refetch, page])

    const handleRefresh = () => {
        setLiked(true)
    }

    const hadlePagination = async (e: any) => {
        let count = e.currentTarget.dataset.count

        if (count === "next") setPage(old => old + 1)
        if (count === "prev") setPage(old => old - 1)
    }

    if (isLoading) return <> 'Loading...' </>

    if (error) return <>{
        `An error has occurred: You must be logged in'`
    }
    </>

    console.log(data.data.info.next)
    return (<>
        <Pagination click={hadlePagination} info={data.data.info} currentPage={page} />
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
                                <p>{data.favs?.characterId.includes(char.id) ? "Fav" : ""}</p>
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
