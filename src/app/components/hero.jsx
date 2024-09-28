import Image from 'next/image'
import React from 'react'
export default function Hero({ImageUrl,content}) {
 
    return (
      <div className=' h-screen relative'>
        <div className='absolute inset-0 -z-10'>
          <Image src={ImageUrl} alt={content} fill style={{objectFit:'cover'}}/>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-950 '></div>
        </div>
        <div className='flex text-white justify-center h-full items-center text-6xl'>
          <h1>{content}</h1>
        </div>
      </div>
    )
  }