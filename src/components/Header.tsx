import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { Input } from './ui/input'
import { Link, useLocation } from 'react-router-dom'
import type { URLSearchParamsInit } from 'react-router-dom';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from './ui/breadcrumb';
import { useNavigate } from "react-router";

type HeaderProps = {
  recipeName?: string;
  queryParams?: string;
  setSearchQuery?: (
    nextInit: URLSearchParamsInit,
    navigateOptions?: { replace?: boolean; state?: any }
  ) => void;
};

export default function Header({ queryParams, setSearchQuery, recipeName }: HeaderProps) {

    const [searchValue, setSearchValue] = useState<string>()
    const location = useLocation()
    let pathNameArray = location.pathname.split("/")
    pathNameArray = pathNameArray.filter(item => item != "")
    const navigate = useNavigate()
    console.log(pathNameArray)

    const updateQuery = (value: string) => {
        if (setSearchQuery && location.pathname == "/recipes") {
            setSearchQuery({ q: value});
        }
    };  
    
     const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && location.pathname != '/recipes') {
        navigate(`/recipes?q=${encodeURIComponent(searchValue || "")}`);
      }
    };

    const capitalizeFirstLetter = (string: string) => {
        const capitalized = string.charAt(0).toUpperCase() + string.slice(1)
        return capitalized
    }

  return (
    <header className="fixed flex flex-col w-full global-responsive-margin py-[2.313rem] z-50 bg-white">
        <div className='sm:mb-5'>
            <div className="absolute inset-0 -z-50">
                <div className="w-full h-full bg-gradient-to-b blur-md from-primary-100 to-white"></div>
            </div>

            <div className="flex z-40 items-center justify-between">
                <Link to={"/"}>
                <h1 className="!font-header-font text-[clamp(1rem,5vw,1.5rem)] font-semibold uppercase tracking-header text-dark cursor-pointer">
                    Cuisine Hero
                </h1>
                </Link>

                <div className="relative ml-8 sm:block hidden">
                    <div className="flex items-center w-full">
                        <IoSearch className="absolute text-2xl left-4 text-dark"></IoSearch>
                        <Input
                        value={queryParams}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => {updateQuery(e.target.value); setSearchValue(e.target.value)}}
                        type="search"
                        placeholder="Search"
                        className="pl-12 w-[30vw] max-w-[21.938rem] min-w-[14.938rem] h-[2.188rem] text-base border-none outline-none py-5 bg-white text-dark rounded-full"
                        />
                    </div>
                </div>
                <div className='sm:hidden block'>
                    <IoSearch className="text-2xl text-dark"></IoSearch>
                </div>
            </div>
        </div>

        <nav className='hidden sm:block'>
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link className=" font-body-font bg-secondary-100 py-1 px-2 rounded-full hover:bg-secondary-200 transition-all duration-200" to={`/`}>
                        Home
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {
                    pathNameArray.map((item: string, index: number) => {
                        if (index != pathNameArray.length - 1) {
                            return (
                                <>
                                <BreadcrumbItem key={index}>
                                  <BreadcrumbLink asChild>
                                    <Link
                                      className="font-body-font bg-secondary-100 py-1 px-2 rounded-full hover:bg-secondary-200 transition-all duration-200"
                                      to={`/${item}`}
                                    >
                                      {capitalizeFirstLetter(item)}
                                    </Link>
                                  </BreadcrumbLink>
                                </BreadcrumbItem>
                                {pathNameArray.length != 1 && <BreadcrumbSeparator />}
                                </>
                            );
                        } else {
                            return (<BreadcrumbItem>
                                <BreadcrumbPage className=" font-body-font bg-secondary-200 py-1 px-2 rounded-full">{capitalizeFirstLetter(recipeName || item)}</BreadcrumbPage>
                            </BreadcrumbItem>)
                        }
                    })
                }

            </BreadcrumbList>
        </Breadcrumb>
        </nav>
    </header>
  );
}
