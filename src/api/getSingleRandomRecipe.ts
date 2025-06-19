export const getSingleRandomRecipe = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/random`)
        return response;
    } catch (error) {
        console.error(error)
    }
}