import {
    GET_MARVEL_CHARACTERS_REQ,
    GET_MARVEL_CHARACTERS_SUCCESS,
    GET_MARVEL_CHARACTERS_ERROR
} from './types'
import { getMarvelCharactersAction } from './actions'
import { getMarvelCharacters } from '../../Api/customer'
import { all,call, put, takeEvery, takeLatest } from 'redux-saga/effects'

export function* getMarvel(action) {
    let response = {};
    try {
        response = yield call(getMarvelCharacters)
        yield put({ type: GET_MARVEL_CHARACTERS_SUCCESS, response})
    } catch (error) {
        yield put({ type: GET_MARVEL_CHARACTERS_ERROR })
    }
}

export default function* watchHomeSagas() {
    yield all([
        takeEvery(GET_MARVEL_CHARACTERS_REQ, getMarvel, )
    ]);
    
}