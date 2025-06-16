import { getRecipes } from '@/api/getRecipes'
import Header from '@/components/Header'
import MealsComponent from '@/components/Home/MealsComponent'
import { getDifficultyColor } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { FaBowlFood, FaRegClock } from 'react-icons/fa6'
import { useParams } from 'react-router-dom'

function AsideSkeleton() {
  return (
    <div className='sticky w-[22rem] ml-[7.5rem] mr-[3rem] h-[90%] overflow-y-auto bg-slate-200 rounded-md'></div>
  )
}

function MainSkeleton() {
    return (
        <div className='flex-1 pr-10 h-screen overflow-y-auto scrollbar-hidden bg-slate-200'>

        </div>
    )
}


export default function RecipeDetails() {

    const [loading, setLoading] = useState<boolean>(true)
    const [recipe, setRecipe] = useState<any>({})
    //get the params from the url
    const params = useParams<{ recipeId: string }>()
    //fetch data based on the params
    useEffect(() => {
        const fetchRecipe = async () => {

            try {
                const response = await getRecipes(params.recipeId || "")
                const data = await response?.json()
                setRecipe(data)
                setTimeout(() => {
                    
                }, 2500);
                setLoading(false)
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } catch (error) {
                console.error(error)
            }
        }

        fetchRecipe()
    },[params.recipeId])

  return (
    <>
      <Header recipeName={recipe.name}></Header>
      <div className="flex pt-[9.5rem] h-screen overflow-hidden">

        {loading ? (
          <AsideSkeleton></AsideSkeleton>
        ) : (
          <aside className="sticky w-[22rem] ml-[7.5rem] mr-[3rem] h-full overflow-y-auto">
            <div className="overflow-hidden">
              <img
                src={recipe.image}
                className="carousel-image w-full rounded-md aspect-square max-h-[19.938rem] object-cover"
                alt={recipe.name}
              />
            </div>

            <section className="bg-primary-100 p-5 mt-5 rounded-md">
              <h2 className="font-medium !font-header-font text-2xl mb-5">
                Ingredients
              </h2>
              <ul className="list-disc ml-5 text-dark">
                {recipe.ingredients?.map((ingred: string, index: string) => (
                  <li key={index}>
                    <p className="text-base mb-2">{ingred}</p>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        )}

        <main className="flex-1 pr-10 h-screen pb-10 overflow-y-auto scrollbar-hidden">
          {loading ? (
            <MainSkeleton></MainSkeleton>
          ) : (
            <>
              <section className="flex flex-col">
                <h1 className="!font-header-font font-medium tracking-header text-[2.5rem]">
                  {recipe.name}
                </h1>

                <div className="flex items-center justify-start w-full gap-5">
                  {recipe.cookTimeMinutes !== 0 &&
                    recipe.prepTimeMinutes !== 0 && (
                      <span className="flex items-center gap-2">
                        <FaRegClock className="text-[1.6rem] text-secondary-200" />
                        <p className="!text-[0.875rem]">
                          {recipe.cookTimeMinutes + recipe.prepTimeMinutes} mins
                        </p>
                      </span>
                    )}
                  <span className="flex items-center gap-2">
                    <FaBowlFood className="text-[1.6rem] text-secondary-200" />
                    <p className="!text-[0.875rem]">
                      {recipe.servings > 1
                        ? recipe.servings + " servings"
                        : recipe.servings + " serving"}
                    </p>
                  </span>
                </div>

                <div className="flex mt-4">
                  <p
                    className={`!text-[0.875rem] px-3 py-[.2rem] rounded-full inline-block w-fit ${getDifficultyColor(
                      recipe.difficulty
                    )}`}
                  >
                    {recipe.difficulty}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {recipe.tags?.slice(0, 4).map((item: any, idx: number) => (
                    <p
                      key={idx}
                      className="!text-[0.875rem] bg-primary-100 inline px-3 py-[.2rem] rounded-full"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </section>

              <section className="flex gap-5 flex-col mt-5">
                <h2 className="text-[2.5rem] font-medium !font-header-font">
                  Instructions
                </h2>
                {recipe.instructions?.map((step: string, index: number) => {
                  return (
                    <div>
                      <h1 className="!text-secondary-300 font-semibold text-xl">{`Step ${
                        index + 1
                      }`}</h1>
                      <p className="text-base mt-1">{step}</p>
                    </div>
                  );
                })}
              </section>
            </>
          )}

          <section>
            <MealsComponent headerName={"MORE RECIPES"} />
          </section>
        </main>
      </div>
    </>
  );
}
