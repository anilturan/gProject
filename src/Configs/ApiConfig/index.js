export const baseURL = () => {
  let baseURL;
  if (__DEV__) {
    // Eğer çalışma ortamı development ortamı ise localde kalkacak ApiGateway url'i verilmelidir.
    baseURL = "";
    return baseURL;
  }
  // Production ortamı  ayarlandığında prod ApiGateway url'i verilecektir.
  baseURL = "";
}

export const clientID = "GelsinAppId";
export const clientSecret = "GelsinAppSecret";
export const requestTimeOut = 30000;
export const versionNumber = "v1"