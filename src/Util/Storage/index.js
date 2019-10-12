import { AsyncStorage } from 'react-native'
import {
    call
} from 'redux-saga/effects'
let Access_Mechanism_Credentals = {
    access_token: null,
    token_type: null,
    refresh_token: null,
    expires_in: null,
    scope: null,
    customInfo: null,
    authorities: null,
}
// localstorage yaz.
export const getAccessMechanismCredentials = () => {
    // const storageToken = yield call(AsyncStorage.getItem,"Access_Mechanism_Credentals")
    // return storageToken;
    return Access_Mechanism_Credentals
}

export const setAccessMechanismCredentials = (credentials) => {
    // yield call(AsyncStorage.setItem, 'Access_Mechanism_Credentals', JSON.stringify(credentials));
    Access_Mechanism_Credentals = credentials;
}