export const getSingleRandomRecipe = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_DEV_URL}/api/random`)
        return response;
    } catch (error) {
        console.error(error)
    }
}