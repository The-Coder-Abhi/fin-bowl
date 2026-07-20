import React from 'react'
import "./RMS.css"
import Header from '../../components/Header/Header'
import PageHeader from '../../components/PageHeader/PageHeader'
import { Outlet } from 'react-router-dom'

const RMS = () => {
  return (
    <div className='rms-wrapper'>
        <Header />
        <PageHeader/>
        <Outlet/>
    </div>
  )
}

export default RMS
