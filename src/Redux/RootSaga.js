import { all, fork,call } from 'redux-saga/effects'
import watchHomeSagas from './Home/sagas'
import Api from '../Services/Api'

export default function* root() {
    debugger
    yield all([
        fork(watchHomeSagas)
    ])
}