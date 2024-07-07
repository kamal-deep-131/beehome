import React from 'react'

const Statas = () => {
    return (
        <section className='flex flex-col gap-2 items-center justify-center  p-3 md:p-10 '>
            <h3 className='text-2xl md:text-4xl px-6 md:px-0 font-bold pb-8 text-center'>What's happening in Beehome</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-28">
                <div className="flex flex-col">
                    <h5 className='text-lg md:text-3xl font-semibold text-mainColor'>500M+</h5>
                    <p className='text-slate-500 text-xs'>In property sale</p>
                </div>
                <div className="flex flex-col">
                    <h5 className='text-lg md:text-3xl font-semibold text-mainColor'>43,652</h5>
                    <p className='text-slate-500 text-xs'>Home for sale</p>
                </div>
                <div className="flex flex-col">
                    <h5 className='text-lg md:text-3xl font-semibold text-mainColor'>12,579</h5>
                    <p className='text-slate-500 text-xs'>Recentely sold</p>
                </div>
                <div className="flex flex-col">
                    <h5 className='text-lg md:text-3xl font-semibold text-mainColor'>5,892</h5>
                    <p className='text-slate-500 text-xs'>Home for rent</p>
                </div>
            </div>
        </section>
    )
}

export default Statas