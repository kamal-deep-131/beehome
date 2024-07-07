import React from 'react'
import Card from './Card'
import { myContext } from '../context/Context'
import { Link } from 'react-router-dom'

const LatestListing = () => {
    const { houseList } = myContext()
    const houseDetails = houseList.slice(0, 3)
    // console.log(houseList)

    return (
        <section className='flex flex-col gap-2 items-start justify-start  w-full p-6 md:p-20'>
            <h3 className='text-2xl md:text-4xl font-bold pb-4'>Latest listings</h3>
            <div className='flex flex-col md:flex-row md:items-center text-sm gap-1'>
                <p className='text-slate-500'>Beehome's most popular watchlist. </p>
                <p className='text-textColor'>View all {houseList.length} listings</p>
                <div className='md:ml-4 bg-blueBg rounded-full w-5 md:w-10 h-5 md:h-10 flex items-center justify-center'>
                    <img src="/arrow-dark.svg" alt="arrow to left" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
                {
                    houseDetails.map((houseDetail, index) => <Card key={index} houseDetail={houseDetail} />)
                }
            </div>

            <div className="w-full flex justify-center mt-6">
                <Link to='/all-properties'>
                    <button className="text-myBg font-semibold bg-mainColor rounded-full px-6 py-3 ">Explore All</button>
                </Link>
            </div>

        </section>
    )
}

export default LatestListing