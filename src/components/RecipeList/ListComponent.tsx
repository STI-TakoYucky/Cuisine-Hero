import type { URLSearchParamsInit } from 'react-router';
import RecipeCardComponent from '../RecipeCardComponent'
import { TagComboBox } from '../TagComboBox'

type HeaderProps = {
  recipes: any;
  setSearchQuery?: (
    nextInit: URLSearchParamsInit,
    navigateOptions?: { replace?: boolean; state?: any }
  ) => void;
  tagParams: string
};

export default function RecipeList({ recipes, setSearchQuery, tagParams }: HeaderProps) {
  return (
    <div className='flex flex-col justify-start px-[7.5rem] py-[2.313rem]'>
      <TagComboBox setSearchQuery={setSearchQuery} tagParams={tagParams}></TagComboBox>
      <div className='flex flex-wrap gap-5'>
        {
          recipes.map((recipe: any, index: number) => 
            <div key={index}>
              <RecipeCardComponent recipe={recipe}/>
            </div>
          )
        }
      </div>
    </div>
  )
}
