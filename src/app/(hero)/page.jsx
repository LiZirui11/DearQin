import React from 'react'
import homeSrc from'/public/Home.JPG'
import Hero from '../components/hero'
export const metadata={
  title:'Home',
  description:'This is my home page'
}
export default function Page() {
  const obj={ImageUrl:homeSrc,content:'Dear Qin'}
  return (
    <Hero {...obj}/>
  )
}