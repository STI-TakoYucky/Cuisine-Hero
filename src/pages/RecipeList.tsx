import { getRecipes } from '@/api/getRecipes'
import Header from '@/components/Header'
import ListComponent from '@/components/RecipeList/ListComponent'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";

export default function RecipeList() {

    const [searchQuery, setSearchQuery] = useSearchParams()
    const queryParams = searchQuery.get("q");
    const [recipes, setRecipes] = useState<any>([])

    useEffect(() => {

        const debounce = setTimeout(() => {
            const fetchAllRecipes = async () => {
                try {
                    let response;
                    console.log(searchQuery)
                    if (searchQuery) {
                        response = await getRecipes(`search?q=${encodeURIComponent(queryParams || "")}`)
                    } else {
                        response = await getRecipes("")
                    }
                    const data = await response?.json()
                    setRecipes(data.recipes)
                } catch (error) {
                    console.log(error)
                }
            }

            fetchAllRecipes()
        }, 500);

        return () => clearTimeout(debounce)
    }, [searchQuery])

  return (
    <>
      <Header
        queryParams={queryParams || ""}
        setSearchQuery={setSearchQuery}
      ></Header>
      <main className="pt-[9rem] -z-50">
        <ListComponent recipes={recipes}></ListComponent>
      </main>
    </>
  );
}
