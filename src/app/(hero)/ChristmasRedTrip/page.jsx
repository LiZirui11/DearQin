import React from 'react'
import Hero from '../../components/hero'
import ChristmasUrl from '/public/Christmas.jpg'

export const metadata={
    title:'ChristmasRedTrip',
    description:'This is my ChristmasRedTrip page'
  }
export default function page() {
    const obj={ImageUrl:ChristmasUrl,content:'Qin,You are the best Red'}
  return (
    
    <Hero 
    ImageUrl={ChristmasUrl}
    content={'Qin,You are the best Red'}
    
    />
  )
}
