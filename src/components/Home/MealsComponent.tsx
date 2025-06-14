import React, { useEffect, useState } from 'react'
import CustomCarouselComponent from './CustomCarouselComponent'
import { getRecipes } from '@/api/getRecipes'
import { Link } from 'react-router';

export default function MealsComponent({ headerName, recipeTags}: {headerName: string, recipeTags?: string}) {

  const [recipes, setRecipes] = useState<any>([]);

   useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getRecipes(recipeTags || "");
        const data = await response?.json();
        setRecipes(data?.recipes || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, []);
  
  return (
    <div className='w-full py-[8rem]'>
        <div className='flex items-baseline justify-between'>
          <h1 className='tracking-header text-[2.5rem] font-medium !font-header-font text-dark'>{headerName}</h1>
          <Link to={'/recipes'}>
              <p className='cursor-pointer'>More</p>
          </Link>
        </div>
        <CustomCarouselComponent recipes={recipes}></CustomCarouselComponent>
    </div>
  )
}
