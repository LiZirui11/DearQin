import React from 'react'
import Hero from '../../components/hero'
import ChristmasUrl from '/public/Uestc.jpg'
export const metadata={
    title:'UESTCStoryStart',
    description:'This is my UESTCStoryStart page'
  }
export default function page() {
    const obj={ImageUrl:ChristmasUrl,content:'Qin,Our story is just beginning!'}
  return (
    <Hero {...obj}/>
  )
}
 