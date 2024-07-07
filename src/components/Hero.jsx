import React from 'react'

const Hero = () => {
    return (
        <section className='flex flex-col gap-2 items-center justify-center py-4 pt-20 md:pt-8 px-10'>
            <h1 className='text-fontColor font-bold text-5xl md:text-9xl text-center p-4 md:p-12'>Find your home</h1>
            <div className='relative pt-12 '>
                <form className=' gap-4 '>
                    <div className='bg-blueBg  rounded-full flex justify-between items-center absolute left-1/2 w-full md:w-4/6 transform -translate-x-1/2 -translate-y-1/2 z-0'>
                        <input type="text" placeholder='Search address, City, Postcode, Agent'
                            className='placeholder:text-textColor placeholder:text-base w-full py-2 pl-4 md:py-3 md:pl-6 bg-transparent rounded-full outline-none border-none block' />
                        <button
                            type="submit"
                            className='btn rounded-full bg-textColor text-myBg hover:bg-textColor hover:text-myBg px-2 py-3 md:py-3 md:px-6 m-1 '>
                            <img src="/search.svg" alt="search" />
                            Find Out
                        </button>
                    </div>
                </form>
                <img className='rounded-[1.5rem] md:rounded-[2.5rem]' src="/homepage.jpg" alt="Modern minimalistic house" loading='lazy' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-2 items-center w-full p-4 md:p-12">
                <div className='flex flex-col items-center md:items-start justify-center md:justify-start gap-2 md:col-span-3'>
                    <div className='flex justify-center items-center gap-1'>
                        <img src="/star.svg" alt="Trustpilot" loading='lazy' />
                        <p className='text-lg md:text-2xl font-bold'>Trustpilot</p>
                    </div>
                    <p className='text-slate-500 text-sm'>Excellent, 10,000+ reviews</p>
                    <div className='z-0'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
                <div className='md:col-span-6 flex items-center justify-center flex-col gap-4'>
                    <p className='text-lg text-center'>
                        "Beehome is just amazing, selling a house has never been easier like Beehome"
                    </p>
                    <p className='text-sm text-slate-500'>Arthur J</p>
                </div>
                <div className='md:col-span-3 flex flex-col items-center justify-center md:items-end md:justify-end'>
                    <div className='p-2 bg-blueBg rounded-full w-10 h-10 flex items-center justify-center'>
                        <img src="/arrow-dark.svg" alt="arrow to left" />
                    </div>
                    <p className='text-sm text-slate-500'>View all reviews</p>
                </div>
            </div>
        </section>
    )
}

export default Hero
