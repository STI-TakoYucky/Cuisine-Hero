import React, { useEffect, useState } from 'react'
import CustomCarouselComponent from './CustomCarouselComponent'
import { getRecipes } from '@/api/getRecipes'

export default function MealsComponent({ headerName, recipeTags}: {headerName: string, recipeTags: string}) {

  const [recipes, setRecipes] = useState<any>([]);

   useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getRecipes(recipeTags);
        const data = await response?.json();
        setRecipes(data?.results || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, []);

  console.log(recipes)
  
  return (
    <div className='w-full py-[8rem]'>
        <div className='flex items-baseline justify-between'>
          <h1 className='tracking-header text-[2.5rem] font-medium !font-header-font text-dark'>{headerName}</h1>
          <p className='cursor-pointer'>More</p>
        </div>
        <CustomCarouselComponent recipes={recipes}></CustomCarouselComponent>
    </div>
  )
}
