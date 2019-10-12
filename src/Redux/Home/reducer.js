import {
    GET_MARVEL_CHARACTERS_REQ,
    GET_MARVEL_CHARACTERS_SUCCESS,
    GET_MARVEL_CHARACTERS_ERROR
} from './types'

const initialState = {
    characters: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MARVEL_CHARACTERS_REQ:
            debugger
            return {
                ...state,
                loading: true,
            }
        case GET_MARVEL_CHARACTERS_SUCCESS:
            debugger
            return {
                ...state,
                loading: false,
                characters: action.response
            }
        case GET_MARVEL_CHARACTERS_ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}