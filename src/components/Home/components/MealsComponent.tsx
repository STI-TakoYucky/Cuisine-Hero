import React from 'react'
import CustomCarouselComponent from './CustomCarouselComponent'

export default function MealsComponent() {
  return (
    <div className='w-full'>
        <h1 className='tracking-header text-[2.5rem] font-medium !font-header-font text-dark'>MEALS</h1>
        <CustomCarouselComponent items={10}></CustomCarouselComponent>
    </div>
  )
}
