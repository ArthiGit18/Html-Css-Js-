import React from 'react'
import Nav from './HomePage/Nav'
import Banner from './HomePage/Banner'
import About from './HomePage/About'
import Cards from './HomePage/Cards'
import Count from './HomePage/Count'
import Keys from './HomePage/Keys'
import Contact from './HomePage/Contact'

const Home = () => {
  return (
    <div>
        <Nav />
        <Banner />
        <About />
        <Cards />
        <Count />
        <Keys />
        <Contact />
    </div>
  )
}

export default Home