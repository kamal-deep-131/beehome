import React, { useEffect } from 'react'
import { register } from 'swiper/element/bundle';

const Reviews = () => {
    useEffect(() => {
        register();
    }, []);

    const reviews = [
        {
            name: 'Alice Johnson',
            profession: 'Software Engineer',
            review: 'Absolutely fantastic service! The team was incredibly helpful and made the entire process of buying a house smooth and stress-free. Highly recommend this company to anyone looking for a new home.',
        },
        {
            name: 'Bob Smith',
            profession: 'Graphic Designer',
            review: 'The best real estate experience I have ever had! The agents were knowledgeable and attentive to my needs, ensuring I found the perfect property. I will definitely use their services again.',
        },
        {
            name: 'Catherine Williams',
            profession: 'Marketing Specialist',
            review: 'Excellent service from start to finish. The agents were professional and responsive, answering all my questions promptly. I felt confident throughout the entire process thanks to their expertise.',
        },
        {
            name: 'David Brown',
            profession: 'Financial Analyst',
            review: 'A truly outstanding company. They made the process of selling my home easy and efficient. Their attention to detail and customer service are top-notch. I highly recommend them to everyone.',
        },
        {
            name: 'Emma Davis',
            profession: 'Project Manager',
            review: 'I had a wonderful experience with this real estate company. They were incredibly supportive and provided valuable advice throughout the entire buying process. I couldn\'t have asked for better service.',
        },
    ];

    return (
        <section id='reviews'>
            <h3 className='text-2xl md:text-4xl text-center font-bold pb-4 mt-8'>What our Client Say</h3>
            <swiper-container
                slide-per-view="1"
                loop="true"
                css-mode="true"
            >
                {reviews.map((review, index) => (
                    <swiper-slide key={index}>
                        <div className="flex flex-col justify-center items-center m-3 md:m-10 bg-gradient-to-b from-blueBg to-white rounded-xl">
                            <p className="text-textColor text-lg md:text-xl text-center p-6 md:px-64 md:py-8">{review.review}</p>
                            <p className="text-lg font-bold text-textColor">{review.name}</p>
                            <p className="text-center text-slate-500 text-sm">{review.profession}</p>
                        </div>

                    </swiper-slide>
                ))}
            </swiper-container>
        </section>


    )
}

export default Reviews;