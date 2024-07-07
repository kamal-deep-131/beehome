import React, { useState } from 'react'
import { myContext } from '../context/Context.jsx'
import { Card } from '../components/index.js'

const AllProperties = () => {
    const { houseList } = myContext()
    const [selectedType, setSelectedType] = useState('All')

    const handleFilterChange = (type) => {
        setSelectedType(type)
    }

    const filteredHouseDetails = selectedType === 'All'
        ? houseList
        : houseList.filter(house => house.propertyType === selectedType)

    // house.propertyType === selectedType

    return (
        <section className='flex flex-col gap-2 items-start justify-start w-full p-6 md:p-20'>
            <h3 className='text-4xl font-bold pb-4'>All listings</h3>
            <div className='flex items-center text-sm gap-1'>
                <p className='text-slate-500'>All properties listed on Beehome. </p>
                <p className='text-textColor'>View all {houseList.length} listings</p>
                <div className='ml-4 bg-blueBg rounded-full w-10 h-10 flex items-center justify-center'>
                    <img src="/arrow-dark.svg" alt="arrow to left" />
                </div>
            </div>

            {/* filters */}
            <div className='w-full flex text-sm gap-2 mt-4'>
                <button
                    className={`font-semibold  ${selectedType === 'All' ? 'bg-textColor text-myBg' : 'outline outline-1 outline-textColor bg-transparent text-textColor'} rounded-full px-6 py-3 cursor-pointer `}
                    onClick={() => handleFilterChange('All')}
                >
                    All
                </button>
                <button
                    className={`font-semibold  ${selectedType === 'house' ? 'bg-textColor text-myBg' : 'outline outline-1 outline-textColor bg-transparent text-textColor'} rounded-full px-6 py-3 cursor-pointer`}
                    onClick={() => handleFilterChange('house')}
                >
                    House
                </button>
                <button
                    className={`font-semibold ${selectedType === 'apartment' ? 'bg-textColor text-myBg' : 'outline outline-1 outline-textColor bg-transparent text-textColor'} rounded-full px-6 py-3 cursor-pointer`}
                    onClick={() => handleFilterChange('apartment')}
                >
                    Apartment
                </button>
                <button
                    className={`font-semibold  ${selectedType === 'villa' ? 'bg-textColor text-myBg' : 'outline outline-1 outline-textColor bg-transparent text-textColor'} rounded-full px-6 py-3 cursor-pointer`}
                    onClick={() => handleFilterChange('villa')}
                >
                    Villa
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
                {filteredHouseDetails.map((houseDetail, index) => (
                    <Card key={index} houseDetail={houseDetail} />
                ))}
            </div>


        </section>
    )
}

export default AllProperties
