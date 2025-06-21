import { useEffect, useState } from 'react'
import CustomCarouselComponent from './CustomCarouselComponent'
import { getRecipes } from '@/api/getRecipes'
import { Link } from 'react-router';
import Skeleton from '../Skeleton';

export default function MealsComponent({ headerName, recipeTags}: {headerName: string, recipeTags?: string}) {

  const [recipes, setRecipes] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getRecipes(recipeTags || "");
        const data = await response?.json();
        setRecipes(data?.recipes || []);
        setTimeout(() => {
          if (data) {
            setLoading(false)
          }
        }, 2500);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, []);
  
  return (
    <div className='w-full pb-[5rem]'>
        <div className='flex items-baseline justify-between'>
          <h1 className='tracking-header text-[clamp(1.5rem,5vw,2.5rem)] font-medium !font-header-font text-dark'>{headerName}</h1>
          <Link to={`/recipes${headerName != "RECIPES" ? "?tag=" + headerName.toLowerCase(): ""}`}>
              <p className='cursor-pointer'>More</p>
          </Link>
        </div>
        { loading ? <Skeleton></Skeleton>: <CustomCarouselComponent recipes={recipes}></CustomCarouselComponent>}
    </div>
  )
}
