import React from 'react'
import Hero from '../../components/hero'
import ChristmasUrl from '/public/Snow.jpg'
export const metadata={
    title:'SnowMoutain',
    description:'This is my SnowMoutain page'
  }
export default function page() {
    const obj={ImageUrl:ChristmasUrl,content:'Qin,We have first trip,do you happy or not!'}
  return (
    <Hero {...obj}/>
  )
}
 