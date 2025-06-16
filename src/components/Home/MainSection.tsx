import React from 'react'
import EasyMealsComponent from './MealsComponent'
import MealsComponent from './MealsComponent'
import RecipeOfTheDay from './RecipeOfTheDay'
import TagsComponent from './TagsComponent'

export default function MainSection() {
  return (
    <div className="mt-[100vh] px-[7.5rem] bg-white h-full z-50 shadow-[0px_0px_50px_rgba(0,0,0,0.15)]">
      <MealsComponent headerName={"RECIPES"}/>
      <RecipeOfTheDay></RecipeOfTheDay>
      <TagsComponent></TagsComponent>
      <MealsComponent headerName='CHICKEN' recipeTags={"tag/Chicken"}/>
    </div>
  )
}
