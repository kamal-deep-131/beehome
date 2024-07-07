import React from 'react';

const PropertyCard = ({ houseDetail }) => {
    const {
        address,
        area,
        bathrooms,
        bedrooms,
        discountedPrice,
        imageurl,
        propertyName,
        regularPrice,
    } = houseDetail;

    return (
        <div className="card rounded-xl bg-blueBg hover:bg-white  hover:shadow-xl transition duration-150 ease-linear">
            <figure >
                <img
                    className='rounded-xl aspect-video object-cover'
                    src={imageurl ? imageurl : "/dummy-placeholder.png"}
                    alt={propertyName}
                    loading='lazy'
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">${regularPrice ? regularPrice : "Regular Price"} <span className='text-slate-500'>${discountedPrice ? discountedPrice : "Enter Discounted Price"}</span></h2>
                <p className='text-base'>{propertyName ? propertyName : "Please enter name"}</p>
                <p className='text-sm text-slate-500'>{address ? address : "Please enter address"}</p>
                <div className="flex justify-between items center flex-wrap gap-1">
                    <div className='flex justify-center items-center gap-1'>
                        <img src="/bed.svg" className='w-4' alt="bed" />
                        <p className='text-sm text-textColor'>{bedrooms ? bedrooms : "Enter number"} beds</p>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <img src="/bathroom.svg" className='w-4' alt="bed" />
                        <p className='text-sm text-textColor'>{bathrooms ? bathrooms : "Enter Bathroom number"} bathrooms</p>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <img src="/area.svg" className='w-4' alt="bed" />
                        <p className='text-sm text-textColor'>{area ? area : "Enter area in"} sqft</p>
                    </div>

                </div>
            </div>
        </div>
    );
};



export default PropertyCard;
