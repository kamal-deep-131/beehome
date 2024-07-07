import React from 'react'

const CategoryCard = ({ imgUrl, title, listingNumber }) => {
    return (
        <div className="flex justify-start gap-5 items-center bg-blueBg rounded-xl">
            <figure>
                <img
                    className='w-32 aspect-square object-cover rounded-xl'
                    src={imgUrl}
                    loading='lazy'
                    alt="Shoes" />
            </figure>
            <div className='p-5'>
                <h6 className=' text-xl text-textColor font-semibold'>{title}</h6>
                <p className='text-slate-500 font-medium'>{listingNumber} listings</p>
            </div>
        </div>
    )
}

export default CategoryCard