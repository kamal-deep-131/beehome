import React from 'react'

const ProcessCard = ({ processData }) => {
    return (
        <div className="card bg-white" >

            <div className="card-body">
                <h2 className="card-title text-lg  font-normal">{processData.title}</h2>
            </div>
            <figure>
                <img
                    className='aspect-[4/3] rounded-xl object-cover'
                    src={processData.image}
                    loading='lazy'
                    alt="Shoes" />
            </figure>
        </div>
    )
}

export default ProcessCard