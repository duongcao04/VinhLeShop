import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './component/header'

function BT4() {
  return (
    <div>
      <Header/>
      <Outlet/>
      
    </div>
  )
}

export default BT4
