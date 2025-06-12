import React, { useEffect, useState } from 'react'
import CustomCarouselComponent from './CustomCarouselComponent'
import { getRecipes } from '@/api/getRecipes'

export default function EasyMealsComponent() {

  const [recipes, setRecipes] = useState<any>([]);

   useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getRecipes("easy");
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
    <div className='w-full'>
        <h1 className='tracking-header text-[2.5rem] font-medium !font-header-font text-dark'>EASY TO COOK!</h1>
        <CustomCarouselComponent recipes={recipes}></CustomCarouselComponent>
    </div>
  )
}
