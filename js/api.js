export const getCharacters = async() => {
    const url = `https://bobsburgers-api.herokuapp.com/characters/`
    const response = await fetch(url)
    const characters = await response.json()

    return characters
}