import React, { ReactElement } from 'react'
import { useQuery } from 'react-query'
import fetchAPI from '../../../../utils/fetchAuth'

function ListView(): ReactElement {


    const { isLoading, isError, data, error } = useQuery('todos', () => fetchAPI("/api/rick/"))

    console.log("error", error, data)

    if (isLoading) return <> 'Loading...' </>

    if (error) return <>{

        `An error has occurred: You must be logged in'`
    }
    </>


    return (
        <div>
            Fetch sucessfully:  {JSON.stringify(data)}
        </div>
    )
}

export default ListView
