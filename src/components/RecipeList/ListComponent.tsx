import React from 'react'
import { concatString, getDifficultyColor } from '@/lib/utils'
import RecipeCardComponent from '../RecipeCardComponent'

export default function RecipeList({ recipes }: {recipes: any}) {
  return (
    <div className='flex flex-wrap gap-5 justify-start px-[7.5rem] py-[2.313rem]'>
      {
        recipes.map((recipe: any, index: number) => 
          <div key={index}>
            <RecipeCardComponent recipe={recipe}/>
          </div>
        )
      }
    </div>
  )
}
