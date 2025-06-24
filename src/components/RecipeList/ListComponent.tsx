import type { URLSearchParamsInit } from 'react-router';
import RecipeCardComponent from '../RecipeCardComponent';
import { TagComboBox } from '../TagComboBox';
import chef from "@/assets/images/Chef_Image.png";
import { useEffect, useState } from 'react';

type HeaderProps = {
  recipes: any;
  setSearchQuery?: (
    nextInit: URLSearchParamsInit,
    navigateOptions?: { replace?: boolean; state?: any }
  ) => void;
  tagParams: string;
};

export default function RecipeList({ recipes, setSearchQuery, tagParams }: HeaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [recipes]);

  return (
    <div className="flex flex-col justify-center w-full global-responsive-margin py-[2.313rem]">
      <TagComboBox setSearchQuery={setSearchQuery} tagParams={tagParams} />

      <div className="flex flex-wrap items-center gap-5 w-full min-h-[12rem]">
        {loading ? (
          <div className='flex w-full justify-center items-center'>
            <div className="w-10 h-10 border-4 border-primary-100 border-t-transparent rounded-full animate-spin relative top-1/2" />
          </div>
        ) : recipes.length > 0 ? (
          recipes.map((recipe: any, index: number) => (
            <div key={index}>
              <RecipeCardComponent recipe={recipe} />
            </div>
          ))
        ) : (
          <div className="flex flex-col w-full items-center justify-center">
            <img src={chef} className="w-[30vw] min-w-[18rem] h-auto" />
            <p className="text-center !text-[clamp(1rem,3vw,1.3rem)] !font-header-font mt-5 max-w-[25rem]">
              No results found, but the perfect recipe might just be one search away! 🍳
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
