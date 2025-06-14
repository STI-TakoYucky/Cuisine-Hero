import { getSingleRandomRecipe } from "@/api/getSingleRandomRecipe";
import { useEffect, useState } from "react";
import { FaBowlFood, FaRegClock } from "react-icons/fa6";

export default function RecipeOfTheDay() {
  const [randRecipe, setRecipe] = useState<any>();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await getSingleRandomRecipe();
        const data = (await response?.json());
        setRecipe(data.results || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipe();
  }, []);

  return (
    <div className="w-full pb-10">
      <div className="flex items-baseline justify-between">
        <h1 className="tracking-header text-[2.5rem] font-medium !font-header-font text-dark">
          RECIPE OF THE DAY!
        </h1>
      </div>

      {randRecipe?.map((recipe: any, index: number) => {
        let id: string = recipe.canonical_id.replace("recipe:", "")
        return (
          <div id={id} key={index} className="w-full h-[28rem] rounded-md bg-white shadow-md flex overflow-hidden carousel-item hover:bg-slate-100 hover:translate-y-3 cursor-pointer transition-all duration-200 ease-in-out hover:shadow-none">
            <div className="mr-10 overflow-hidden">
              <img
                src={recipe.thumbnail_url}
                className="carousel-image w-full rounded-t-md aspect-square max-h-[30rem] object-cover"
                alt=""
              />
            </div>

            <div className="flex flex-col justify-between flex-1 p-5">
              <div className="flex flex-col gap-2">
                <h1 className="text-[2.5rem] !font-medium ">{recipe.name}</h1>

                <div className="flex items-center w-full gap-5">
                  {recipe.cook_time_minutes !== 0 &&
                    recipe.prep_time_minutes !== 0 && (
                      <span className="flex items-center gap-2">
                        <FaRegClock className="text-[1.6rem] text-secondary-200" />
                        <p className="!text-[0.875rem]">
                          {recipe.cook_time_minutes + recipe.prep_time_minutes}{" "}
                          mins
                        </p>
                      </span>
                    )}
                  <span className="flex items-center gap-2">
                    <FaBowlFood className="text-[1.6rem] text-secondary-200" />
                    <p className="!text-[1rem]">
                      {recipe.num_servings > 1
                        ? recipe.num_servings + " servings"
                        : recipe.num_servings + " serving"}
                    </p>
                  </span>
                </div>
                <p className="!text-[1.25rem]/9 mt-5 max-w-[95%]">{recipe.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {recipe.tags?.slice(0, 4).map((item: any, idx: number) => (
                  <p
                    key={idx}
                    className="!text-[0.875rem] bg-primary-100 inline px-3 py-[.2rem] rounded-full"
                  >
                    {item.display_name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
