'use client'
import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import { CarProps } from '@/types'
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import CustomButton from './CustomButton'
import CarDetails from './CarDetails'

interface carCardProps {
    car: CarProps;
}

const CarCard = ({ car }: carCardProps) => {
    const { year, make, model, transmission, city_mpg, drive } = car;
    const carRent = calculateCarRent(city_mpg, year);
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='car-card group'>
            <div className="card-card__content">
                <h2 className='car-card__content-title'>
                    {make} {model}
                </h2>
            </div>
            <p className='felx mt-6 font-extrabold text-[32px]'>
                <span className='self-start text-[14px] font-semibold'>
                    $
                </span>
                {carRent}
                <span className='self-end text-[14px] font-medium'>
                    /day
                </span>
            </p>
            <div className="relative w-full h-40 my-3 object-contain">
                <Image src={generateCarImageUrl(car)}
                    alt='car-model'
                    fill
                    className='object-contain' />
            </div>
            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full
                justify-between text-gray">
                    <div className="flex items-center flex-col justify-center gap-2">
                        <Image
                            src="/steering-wheel.svg"
                            width={20}
                            alt='steering-wheel'
                            height={20} />
                        <p className='text-[14px]'>
                            {transmission === 'a' ?
                                "Automatic" : "Manual"}
                        </p>
                    </div>
                    <div className="flex items-center flex-col justify-center gap-2">
                        <Image
                            src="/tire.svg"
                            width={20}
                            alt='tire'
                            height={20} />
                        <p className='text-[14px]'>
                            {drive.toUpperCase()}
                        </p>
                    </div>
                    <div className="flex items-center flex-col justify-center gap-2">
                        <Image
                            src="/gas.svg"
                            width={20}
                            alt='gas'
                            height={20} />
                        <p className='text-[14px]'>
                            {city_mpg}MPG
                        </p>
                    </div>
                </div>
                <div className="car-card__btn-container">
                    <CustomButton
                        title='View More'
                        containerStyle='w-full py-[16px] rounded-full
                        bg-primary-blue'
                        textStyle='text-white text-[14px] leading-[17px]
                        font-bold'
                        rightIcon='/right-arrow.svg'
                        handleClick={() => setIsOpen(true)} />
                </div>
            </div>
            <CarDetails isOpen={isOpen}
                closeModel={() => (
                    setIsOpen(false)
                )}
                car={car}
            />
        </div>
    )
}

export default CarCard