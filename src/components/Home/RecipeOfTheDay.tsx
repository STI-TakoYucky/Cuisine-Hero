import { getSingleRandomRecipe } from "@/api/getSingleRandomRecipe";
import { useEffect, useState } from "react";
import { FaBowlFood, FaRegClock } from "react-icons/fa6";
import { useNavigate } from "react-router";

export default function randRecipeOfTheDay() {
  const [randRecipe, setrandRecipe] = useState<any>({});
  const navigate = useNavigate()

  useEffect(() => {
    const fetchrandRecipe = async () => {
      try {
        const response = await getSingleRandomRecipe();
        const data = (await response?.json());
        setrandRecipe(data || {});
      } catch (error) {
        console.error(error);
      }
    };

    fetchrandRecipe();
  }, []);

  return (
    <div className="w-full pb-10" onClick={() => {navigate(`/recipes/${randRecipe.id}`)}}>
      <div className="flex items-baseline justify-between">
        <h1 className="tracking-header text-[clamp(1.5rem,5vw,2.5rem)] font-medium !font-header-font text-dark">
          RECIPE OF THE DAY
        </h1>
      </div>

          <div id={randRecipe.id} className="w-full h-[28rem] mt-7 rounded-md bg-white shadow-md flex flex-col md:flex-row overflow-hidden carousel-item hover:bg-slate-100 hover:translate-y-3 cursor-pointer transition-all duration-200 ease-in-out hover:shadow-none">
            <div className="overflow-hidden">
              <img
                src={randRecipe.image}
                className="carousel-image w-full aspect-square max-h-[100%] object-cover"
                alt=""
              />
            </div>

            <div className="flex flex-col justify-between flex-1 p-5 ">
              <div className="flex flex-col gap-2">
                <h1 className="!text-[clamp(1.5rem,5vw,2.5rem)] !font-medium ">{randRecipe.name}</h1>

                <div className="flex items-center w-full gap-5">
                  {randRecipe.cookTimeMinutes !== 0 &&
                    randRecipe.prepTimeMinutes !== 0 && (
                      <span className="flex items-center gap-2">
                        <FaRegClock className="text-[1.6rem] text-secondary-200" />
                        <p className="!text-[0.875rem]">
                          {randRecipe.cookTimeMinutes + randRecipe.prepTimeMinutes}{" "}
                          mins
                        </p>
                      </span>
                    )}
                  <span className="flex items-center gap-2">
                    <FaBowlFood className="text-[1.6rem] text-secondary-200" />
                    <p className="!text-[1rem]">
                      {randRecipe.servings > 1
                        ? randRecipe.servings + " servings"
                        : randRecipe.servings + " serving"}
                    </p>
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {randRecipe.tags?.map((item: any, idx: number) => (
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

    </div>
  );
}
