import React, { ReactElement } from 'react'
import { useQuery } from 'react-query'
import fetchAPI from '../../../../utils/fetchAuth'

 function ListView(): ReactElement {


    const { isLoading, isError, data, error } = useQuery('todos', () => fetchAPI("/api/rick/") )

    if (isLoading) return <> 'Loading...' </>

    if (error) return <> 'An error has occurred: ' + error.message </>


    return (
        <div>
            Fetch sucessfully:  {JSON.stringify(data)}
        </div>
    )
}

export default ListView
