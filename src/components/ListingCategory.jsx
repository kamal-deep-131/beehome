import React from 'react'
import CategoryCard from './CategoryCard.jsx'

const ListingCategory = () => {
    return (
        <section className='flex flex-col gap-2 items-start justify-start  w-full p-6 md:p-20'>
            <h3 className='text-2xl md:text-4xl font-bold pb-4'>Listings category</h3>
            <div className='flex flex-col md:flex-row md:items-center text-sm gap-1'>
                <p className='text-slate-500'>Beehome's most popular watchlist.</p>
                <p className='text-textColor'>View all listings</p>
                <div className='md:ml-4 bg-blueBg rounded-full w-5 md:w-10 h-5 md:h-10 flex items-center justify-center'>
                    <img src="/arrow-dark.svg" alt="arrow to left" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-5 md:mt-0">
                <CategoryCard
                    imgUrl="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="House"
                    listingNumber={"1,068"}
                />
                <CategoryCard
                    imgUrl="https://images.unsplash.com/photo-1583377519891-1eea1c2e3947?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Appartment"
                    listingNumber={306}
                />
                <CategoryCard
                    imgUrl="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Villa"
                    listingNumber={131}
                />
            </div>
        </section>
    )
}

export default ListingCategory


{/* <h3 className='text-4xl font-bold pb-4'>Listings category</h3>
            <div className='flex items-center text-sm gap-1'>
                <p className='text-slate-500'>Beehome's most popular watchlist. </p>
                <p className='text-textColor'>View all 2,412 listings</p>
                <div className='ml-4 bg-blueBg rounded-full w-10 h-10 flex items-center justify-center'>
                    <img src="/arrow-dark.svg" alt="arrow to left" />
                </div>
            </div> */}