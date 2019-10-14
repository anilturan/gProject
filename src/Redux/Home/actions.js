import { GET_MARVEL_CHARACTERS_REQ } from './types'

export const getMarvelCharactersAction = () => {
    return {
        type: GET_MARVEL_CHARACTERS_REQ,
    }
}