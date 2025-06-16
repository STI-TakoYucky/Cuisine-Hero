import { concatString, getDifficultyColor } from '@/lib/utils'
import { FaBowlFood, FaRegClock } from 'react-icons/fa6'
import { useNavigate } from "react-router";

export default function RecipeCardComponent({ recipe }: {recipe: any}) {
  let navigate = useNavigate();

  return (
    <div onClick={() => {navigate(`/recipes/${recipe.id}`)}} className="w-[19rem] h-[28rem] rounded-md mb-2 bg-white shadow-md flex flex-col overflow-hidden carousel-item hover:bg-slate-100 hover:translate-y-3 cursor-pointer transition-all duration-200 ease-in-out hover:shadow-none">
        <div className="overflow-hidden">
          <img
            src={recipe.image}
            className="carousel-image w-full rounded-t-md aspect-square max-h-[14rem] object-cover"
            alt={recipe.name}
          />
        </div>

        <div className="flex flex-col justify-between flex-1 p-5">
          <div className="flex flex-col gap-4">
            <h1 className="text-[1.1rem] !font-medium">
              {concatString(recipe.name)}
            </h1>

            <div className="flex items-center justify-start w-full gap-5">
              {recipe.cookTimeMinutes !== 0 &&
                recipe.prepTimeMinutes !== 0 && (
                  <span className="flex items-center gap-2">
                    <FaRegClock className="text-[1.6rem] text-secondary-200" />
                    <p className="!text-[0.875rem]">
                      {recipe.cookTimeMinutes +
                        recipe.prepTimeMinutes}{" "}
                      mins
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

            <div className="flex">
              <p
                className={`!text-[0.875rem] px-3 py-[.2rem] rounded-full inline-block w-fit ${getDifficultyColor(
                  recipe.difficulty
                )}`}
              >
                {recipe.difficulty}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {recipe.tags
              ?.slice(0, 4)
              .map((item: any, idx: number) => (
                <p
                  key={idx}
                  className="!text-[0.875rem] bg-primary-100 inline px-3 py-[.2rem] rounded-full"
                >
                  {item}
                </p>
              ))}
          </div>
        </div>
      </div>
  )
}
