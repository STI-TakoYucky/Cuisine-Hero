export const getRecipes = async (tags:string | "") => {
    try {
        const response = await fetch(`http://localhost:3000/api/${tags}`)
        return response;
    } catch (error) {
        console.error(error)
        return
    }
}
