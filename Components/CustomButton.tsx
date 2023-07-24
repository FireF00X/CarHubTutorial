"use client"
import { customButtonProps } from '@/types'
import React from 'react'
import Image from 'next/image'

const CustomButton = ({ title, containerStyle
    , handleClick, btnType, textStyle, rightIcon }: customButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType}
            className={`custom-btn ${containerStyle}`}
            onClick={handleClick}>
            <span className={`flex-1 ${textStyle}`}>
                {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt='image'
                        className='object-contain'
                        fill />
                </div>
            )}
        </button >
    )
}

export default CustomButton