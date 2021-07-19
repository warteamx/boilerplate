import React, { ReactElement } from 'react'

interface info {
  count: number
  next: string
  pages: number
  prev?: string
}

interface Props {
  click?: any
  info: info
  currentPage: number
}

export default function pagination({ click, info, currentPage }: Props): ReactElement {



  return (
    <div style={{margin: 5, backgroundColor: "black", padding: 5, color: "white"}} >
      {currentPage === 1 ? null :
        <>
          <button onClick={click} data-count="prev" > PREV </button>
        </>
      }

     <span style={{margin: "0px 10px"}}>  {currentPage}  of {info.pages}</span> 


      {currentPage === info.pages ? null :
        <>
          <button onClick={click} data-count="next" > NEXT </button>
        </>
      }

    </div>
  )
}
