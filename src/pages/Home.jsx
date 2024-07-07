import React from 'react'
import { Hero, ListingCategory, LatestListing, Process, Statas, Reviews, Service } from '../components'

const Home = () => {
    return (
        <>
            <Hero />
            <LatestListing />
            <Process />
            <ListingCategory />
            <Statas />
            <Reviews />
            <Service />
        </>
    )
}

export default Home