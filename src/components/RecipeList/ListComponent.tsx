import type { URLSearchParamsInit } from "react-router";
import RecipeCardComponent from "../RecipeCardComponent";
import { TagComboBox } from "../TagComboBox";
import chef from "@/assets/images/Chef_Image.png";
import { useEffect, useState } from "react";

type HeaderProps = {
  recipes: any;
  setSearchQuery?: (
    nextInit: URLSearchParamsInit,
    navigateOptions?: { replace?: boolean; state?: any }
  ) => void;
  tagParams: string;
};

export default function RecipeList({
  recipes,
  setSearchQuery,
  tagParams,
}: HeaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [recipes]);

  return (
    <div className="flex flex-col justify-center w-screen global-responsive-margin py-[2.313rem]">
      <TagComboBox setSearchQuery={setSearchQuery} tagParams={tagParams} />

      {loading ? (
        <div className="w-full h-[50vh] flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-primary-100 border-t-transparent rounded-full animate-spin" />
        </div>

      ) : recipes.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(4,minmax(0,1fr))] items-center gap-2 sm:gap-5 w-full min-h-[12rem]">
          {recipes.map((recipe: any, index: number) => (
            <div className="h-full" key={index}>
              <RecipeCardComponent recipe={recipe} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col w-full items-center justify-center">
          <img src={chef} className="w-[30vw] min-w-[18rem] h-auto" />
          <p className="text-center !text-[clamp(1rem,3vw,1.3rem)] !font-header-font mt-5 max-w-[25rem]">
            No results found, but the perfect recipe might just be one search
            away! 🍳
          </p>
        </div>
      )}
      
    </div>
  );
}
