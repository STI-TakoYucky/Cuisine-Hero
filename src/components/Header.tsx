import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { Input } from './ui/input'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='fixed flex w-full items-cente px-[7.5rem] py-[2.313rem]'>
        <div className="absolute inset-0 -z-50">
            <div className="w-full h-full bg-gradient-to-b blur-md from-primary-100 to-white"></div>
        </div>

        <div className='flex z-40'>
            <Link to={'/'}>
            <h1 className='!font-header-font text-[1.5rem] font-semibold uppercase tracking-header text-dark cursor-pointer'>Cuisine Hero</h1>
            </Link>
            <div className='relative ml-8'>
                <div className="flex items-center">
                    <IoSearch className="absolute text-2xl left-4 text-dark"></IoSearch>
                    <Input type="search" placeholder="Search" className="pl-12 w-[21.938rem] h-[2.188rem] text-base border-none outline-none py-5 bg-white text-dark rounded-full"/>
                </div>
            </div>
        </div>
    </header>
  )
}
