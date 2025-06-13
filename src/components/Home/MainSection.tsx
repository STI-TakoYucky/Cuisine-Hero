import React from 'react'
import EasyMealsComponent from './components/MealsComponent'
import MealsComponent from './components/MealsComponent'
import RecipeOfTheDay from './components/RecipeOfTheDay'
import TagsComponent from './components/TagsComponent'

export default function MainSection() {
  return (
    <div className="mt-[100vh] px-[7.5rem] bg-white h-full z-50 shadow-[0px_0px_50px_rgba(0,0,0,0.15)]">
      <MealsComponent headerName={"EASY TO COOK!"} recipeTags='easy'/>
      <RecipeOfTheDay></RecipeOfTheDay>
      <TagsComponent></TagsComponent>
      <MealsComponent headerName='ITALIAN' recipeTags='italian'/>
    </div>
  )
}
