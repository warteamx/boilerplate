import React from 'react'
import Login from './Screens/Login/Login'
import logo from './assets/RickMortyLogo.png'

export const HaufeApp = () => {

  return (
    <div>
      <div className="listView-logo">
        <img src={logo} alt="" />
      </div>
      <Login />
    </div>

  )
}
