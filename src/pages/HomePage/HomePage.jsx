import React, { useContext, useState, useEffect } from 'react'
import Navbar from '../../components/NavbarComponent/Navbar'
import Header from '../../components/HeaderComponent/Header'
import HomeContentComponent from '../../components/HomeContentComponent/HomeContentComponent'


function HomePage() {

  return (
    <>
      <Header></Header>
      <HomeContentComponent />
      <Navbar></Navbar>
    </>

  )
}

export default HomePage