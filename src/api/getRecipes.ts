export const getRecipes = async (tags:string) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_DEV_URL}/api/${tags}`)
        return response;
    } catch (error) {
        console.error(error)
        return
    }
}
