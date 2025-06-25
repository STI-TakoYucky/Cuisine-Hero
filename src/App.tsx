import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import RecipeList from "./pages/RecipeList"
import RecipeDetails from "./pages/RecipeDetails"
import AIChatBot from "./pages/AIChatBot"

function App() {

  //Home '/'
  //Recipe List '/recipes' (will display all the lists of recipes)
  //Recipe Details '/recipes/:id'
  //Recipe Tags List '/categories'
  //Recipe List With tags '/categories/chicken'

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/recipes' element={<RecipeList/>}></Route>
      <Route path='/ai-chat' element={<AIChatBot></AIChatBot>}></Route>
      <Route path='/recipes/:recipeId' element={<RecipeDetails/>}></Route>
    </Routes>
  )
}

export default App
