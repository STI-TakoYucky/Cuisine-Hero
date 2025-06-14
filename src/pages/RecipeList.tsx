import { getRecipes } from '@/api/getRecipes'
import Header from '@/components/Header'
import ListComponent from '@/components/RecipeList/ListComponent'
import React, { useEffect, useState } from 'react'

export default function RecipeList() {

    const [recipes, setRecipes] = useState<any>([])

    useEffect(() => {
        const fetchAllRecipes = async () => {
            try {
                const response = await getRecipes("")
                const data = await response?.json()
                setRecipes(data.recipes)
            } catch (error) {
                console.log(error)
            }
        }

        fetchAllRecipes()
    }, [])

  return (
    <>
        <Header></Header>
        <main>
            <ListComponent recipes={recipes}></ListComponent>
        </main>
    </>
  )
}
