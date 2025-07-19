import { concatString, getDifficultyColor } from '@/lib/utils'
import { FaBowlFood, FaRegClock } from 'react-icons/fa6'
import { useNavigate } from "react-router";

export default function RecipeCardComponent({ recipe }: {recipe: any}) {
  let navigate = useNavigate();

  return (
    <div onClick={() => {navigate(`/recipes/${recipe.id}`)}} className="w-[100%] sm:h-[27rem] h-full rounded-md mb-2 bg-white shadow-md flex flex-col overflow-hidden carousel-item hover:bg-slate-100 hover:translate-y-3 cursor-pointer transition-all duration-200 ease-in-out hover:shadow-none">
        <div className="overflow-hidden relative">
          <div className="flex absolute top-5 left-5 z-10">
            <p
              className={`!text-[10px] sm:!text-[0.875rem] px-3 py-[.2rem] rounded-full inline-block w-fit ${getDifficultyColor(
                recipe.difficulty
              )}`}
            >
              {recipe.difficulty}
            </p>
          </div>

          <img
            src={recipe.image}
            className="brightness-[.9] carousel-image w-full rounded-t-md aspect-square max-h-[14rem] object-cover"
            alt={recipe.name}
          />
        </div>

        <div className="flex flex-col justify-between flex-1 p-3 sm:p-5">
          <div className="flex flex-col gap-4">
            <h1 className="text-[.7rem] sm:text-[1.1rem] !font-medium truncate">
              {recipe.name}
            </h1>

            <div className="flex items-center flex-wrap justify-start w-full gap-5">
              {recipe.cookTimeMinutes !== 0 &&
                recipe.prepTimeMinutes !== 0 && (
                  <span className="flex items-center gap-2">
                    <FaRegClock className="sm:text-[1.6rem] text-secondary-200" />
                    <p className="!text-[12px] sm:!text-[0.875rem]">
                      {recipe.cookTimeMinutes +
                        recipe.prepTimeMinutes}{" "}
                      mins
                    </p>
                  </span>
                )}
              <span className="flex items-center gap-2">
                <FaBowlFood className="sm:text-[1.6rem] text-secondary-200" />
                <p className=" !text-[12px] sm:!text-[0.875rem]">
                  {recipe.servings > 1
                    ? recipe.servings + " servings"
                    : recipe.servings + " serving"}
                </p>
              </span>
            </div>
          </div>

          <div className="flex-wrap gap-2 mt-4 sm:flex hidden">
            {recipe.tags
              ?.slice(0, 4)
              .map((item: any, idx: number) => (
                <p
                  key={idx}
                  className=" sm:!text-[0.875rem] bg-primary-100 inline px-3 py-[.2rem] rounded-full"
                >
                  {item}
                </p>
              ))}
          </div>
        </div>
      </div>
  )
}
