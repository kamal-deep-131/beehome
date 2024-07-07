import React from 'react'

const Service = () => {
    return (
        <section className='flex flex-col gap-2 items-center justify-center  p-3 md:p-10 '>
            <h3 className='text-2xl md:text-4xl px-10 md:px-0  font-bold py-8 text-center'>Find the best home with us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-14">
                <div className="flex flex-col md:flex-row justify-between items-end p-4 bg-blueBg rounded-xl">
                    <div className='flex flex-col float-start items-start gap-2'>
                        <p className='text-base text-slate-500 uppercase font-semibold'>Consultation</p>
                        <p className='text-lg md:text-xl text-textColor'>We are ready to help, consult your property options</p>
                        <button className="btn hover:bg-transparent bg-transparent p-0 m-0 border-none shadow-none">Start Chat
                            <img loading='lazy' src="/orange-arrow.svg" alt="arrow" />
                        </button>
                    </div>
                    <div>
                        <img className='w-full' src="/consultor.png" alt="consultant" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end p-4 bg-blueBg rounded-lg">
                    <div className='flex flex-col flex-start items-start gap-2'>
                        <p className='text-base text-slate-500 uppercase font-semibold'>Calculator</p>
                        <p className='text-lg md:text-xl text-textColor'>Find the best price for you, calculate your property now.</p>
                        <button className="btn hover:bg-transparent bg-transparent p-0 m-0 border-none shadow-none">Calculate
                            <img src="/orange-arrow.svg" alt="arrow" />
                        </button>
                    </div>
                    <div>
                        <img className='w-full' loading='lazy' src="/calculator.png" alt="calculator" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Service