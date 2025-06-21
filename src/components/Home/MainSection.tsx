import MealsComponent from './MealsComponent'
import RecipeOfTheDay from './RecipeOfTheDay'
import TagsComponent from './TagsComponent'

export default function MainSection() {
  return (
    <div className="mt-[100vh] global-responsive-margin bg-white h-full pt-[8rem] z-50 shadow-[0px_0px_50px_rgba(0,0,0,0.15)]">
      {/* <h1 className="absolute before:content-['XS'] sm:before:content-['SM'] md:before:content-['MD'] lg:before:content-['LG'] xl:before:content-['XL'] w-[6rem] rounded-full flex items-center text-4xl justify-center font-bold h-[6rem] bg-secondary-200"></h1> */}
      <MealsComponent headerName={"RECIPES"}/>
      <RecipeOfTheDay></RecipeOfTheDay>
      <TagsComponent></TagsComponent>
      <MealsComponent headerName='CHICKEN' recipeTags={"tag/Chicken"}/>
      <MealsComponent headerName='ASIAN' recipeTags={"tag/Asian"}/>
    </div>
  )
}
