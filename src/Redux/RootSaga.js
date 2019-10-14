import { all, fork,call } from 'redux-saga/effects'
import watchHomeSagas from './Home/sagas'

export default function* root() {
    yield all([
        fork(watchHomeSagas)
    ])
}