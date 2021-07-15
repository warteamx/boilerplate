import React from 'react'
import ListView from './Screens/ListView/ListView'
import Login from './Screens/Login/Login'

export const HaufeApp = () => {
  return (
    <div>
     <p> Haufe App </p>
     <p> Markdown REadme Explanation </p>
     <button> See Rick Morty App</button>
     <button> See Code (Github) </button>
     <div>
       <Login />
     </div>
     <div>
       <ListView />
     </div>
    </div>
  )
}
