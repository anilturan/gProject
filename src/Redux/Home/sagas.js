import {
    GET_MARVEL_CHARACTERS_REQ,
    GET_MARVEL_CHARACTERS_SUCCESS,
    GET_MARVEL_CHARACTERS_ERROR
} from './types'
import { getMarvelCharactersAction } from './actions'
import { getMarvelCharacters } from '../../Api/customer'
import { all,call, put, takeEvery, takeLatest } from 'redux-saga/effects'

export function* getMarvel(action) {
    console.log("worker saga")
    let response = {};
    try {
        debugger
        response = yield call(getMarvelCharacters)
        yield put({ type: GET_MARVEL_CHARACTERS_SUCCESS, response})
    } catch (error) {
        debugger
        yield put({ type: GET_MARVEL_CHARACTERS_ERROR })
    }
}

export default function* watchHomeSagas() {
    debugger
    yield takeEvery(GET_MARVEL_CHARACTERS_REQ, getMarvel, )
    
}