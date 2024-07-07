import React from 'react'
import ProcessCard from './ProcessCard'

const Process = () => {

    const processData = [
        {
            title: "We estimate your home and help you prepare to sell it",
            image: "https://images.unsplash.com/photo-1531497082986-2422f7b87330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Find the best price that work for you",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "We take care of the sale from start to finish",
            image: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

    return (
        <section id='process' className='flex flex-col gap-2 items-center justify-center  m-3 md:m-10 bg-gradient-to-b from-blueBg to-white rounded-lg'>
            <div className='m-3 md:m-10 p-3 md:p-10'>
                <h3 className=' text-2xl md:text-4xl  font-bold pb-16 text-center'>How to sell your home in <br /> Beehome in easiest way</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        processData.map((processData, index) => <ProcessCard processData={processData} key={index} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Process