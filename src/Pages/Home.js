import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import About from './About'
import Cards from './Cards'
import Contact from './Contact'
import Count from './Count'
import Keys from './Keys'

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