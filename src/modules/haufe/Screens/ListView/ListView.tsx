import React, { ReactElement } from 'react'
import { useQuery } from 'react-query'


 function ListView(): ReactElement {


    const { isLoading, isError, data, error } = useQuery('todos', () => fetch("/api/rick/").then(res=>res.json()) )

    if (isLoading) return <> 'Loading...' </>

    if (error) return <> 'An error has occurred: ' + error.message </>


    return (
        <div>
            Fetch sucessfully:  {JSON.stringify(data)}
        </div>
    )
}

export default ListView
