export const getSingleRandomRecipe = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/random')
        return response;
    } catch (error) {
        console.error(error)
    }
}