import React, { useEffect, useState } from 'react'
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

    //mobile search input
    const [isSearchVisible, setSearchVisible] = useState(false)
    const [isAI, setAI] = useState<boolean>(false)
    const location = useLocation()
    let pathNameArray = location.pathname.split("/")
    pathNameArray = pathNameArray.filter(item => item != "")
    const navigate = useNavigate()

    
    useEffect(() => {
        setAI(pathNameArray.includes("ai-chat"));
    }, [location.pathname]);

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
    <header className="fixed flex flex-col w-full justify-center items-center global-responsive-margin py-[1rem] sm:py-[2.313rem] z-50 bg-gradient-to-b from-primary-100 to-white">
        <div className='sm:mb-5 relative w-full'>
            <div className="absolute inset-0 -z-50">
                <div className="w-full h-full "></div>
            </div>

            <div className="flex z-40 items-center justify-between">
                <Link to={"/"}>
                <h1 className="!font-header-font text-[clamp(1rem,5vw,1.5rem)] font-semibold uppercase tracking-header text-dark cursor-pointer">
                    Cuisine Hero
                </h1>
                </Link>

                { !isAI &&
                <>
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
                    <div className='sm:hidden relative block cursor-pointer' onClick={() => setSearchVisible(prev => !prev)}>
                        <IoSearch className="text-2xl text-dark"></IoSearch>
                    </div>
                </>
                }
                
                    { isSearchVisible && !isAI &&
                        <div className='absolute sm:hidden block'>
                            <Input
                            value={queryParams}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => {updateQuery(e.target.value); setSearchValue(e.target.value)}}
                            type="search"
                            placeholder="Search"
                            className="pl-8 w-[75vw] h-[2.188rem] text-base border-none outline-none py-5 bg-white text-dark rounded-full"
                            />
                        </div>
                    }
            </div>
        </div>

        { !isAI &&<nav className='hidden sm:block'>
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
                            return (<BreadcrumbItem key={index}>
                                <BreadcrumbPage className=" font-body-font bg-secondary-200 py-1 px-2 rounded-full">{capitalizeFirstLetter(recipeName || item)}</BreadcrumbPage>
                            </BreadcrumbItem>)
                        }
                    })
                }

            </BreadcrumbList>
        </Breadcrumb>
        </nav>
        }
    </header>
  );
}
