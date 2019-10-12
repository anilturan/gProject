import axios from 'axios'
import {
    baseURL,
    requestTimeOut,
    versionNumber
} from '../Configs/ApiConfig/index';
import {
    getAccessMechanismCredentials,
    setAccessMechanismCredentials
} from '../Util/Storage/index'
import { isNil } from 'lodash'
let axiosInstance = axios.create({
    // baseURL: baseURL().toString(),
    /**
     * .concat("/api/")
     * .concat(versionNumber)
     */
    headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json"
    },
    // timeout: requestTimeOut
});


const controlUnauthorizedStatus = response => {
    if (response && response.status === 401) return true;
    return false;
}
axiosInstance.interceptors.request.use(request => {
    debugger
    //  const accessToken = getAccessMechanismCredentials().access_token;
    // if(!isNil(accessToken)&& request.url !== ApiUrl.login){
    // request.headers = {
    //     ...request.headers,
    //     Authorization: `Bearer ${accessToken}`
    // }

    // }
    return request;
})

axiosInstance.interceptors.response.use(
    response => {
        debugger
        return response
    }
)

export default axiosInstance;