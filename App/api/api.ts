/**
 * API
 * to run: yarn jest --coverage
 * to setup:  in package.json
 */

import { env } from '../config'
import { Platform } from 'react-native'
import { getSystemVersion, getReadableVersion, getVersion  } from 'react-native-device-info'
import Utils from '../services/shared/utils/Utils';


// User-Agent format <OS>-<OS Version>/<Build Version>.<Build No> or <Readable Version>
const userAgent = () => {
  let systemVersion = getSystemVersion();

  if (Platform.OS === 'ios'){
    let readableVersion = getReadableVersion();
    return `iOS-${systemVersion}/${readableVersion}`
  }
  else{
    let readableVersion = getVersion();
    return `Android-${systemVersion}/${readableVersion}`
  }
};

const post = (path: string,
                options: any = { },
                  success: (result: any) => void,
                    failure: (error: any) => void) => {

  const newBaseData = Utils.getBaseUrlData()

  let defaultHeaders = {
    'Accept':       'application/json',
    'Content-Type': 'application/json',
    'Connection': 'keep-alive',
    'User-Agent': userAgent(),
    'x-api-key': `${newBaseData.xApiKey}`,
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0'
  }
  let headers = options.headers ? {
    ...defaultHeaders,
    ...options.headers
  } : defaultHeaders
  let data = {
    ...options,
    headers,
    method: 'POST',
  }

  // DEBUG LOGS
  // SEE .env
  console.log("ENV:", env.IS_DEBUG);
  if (env.IS_DEBUG){
    console.log("PATH:", `${newBaseData.baseUrl}/${path}`);
    console.log("USER-AGENT:" , userAgent());
    console.log("HEADERS:", headers);
    console.log('POST-DATA:', data);
  }


  const urlPath = path.includes("https://") ? `${path}` : `${newBaseData.baseUrl}/${path}`
  return fetch(urlPath, data)
  // TODO GET STATUS CODES
        .then(response => {
          const statusCode = response.status;
          const data = response.json();
          return Promise.all([statusCode, data]);
        })
        .then((response: any) => {

          if (env.IS_DEBUG){
            // console.log("POST RESPONSE: ", response[1]);
          }

          let status = parseInt(response[0]);
          let result = ({ data: response[1], statusCode: status})
          if (result.data.errorMessage)
            return failure(result)

          if (status >= 200 && status <= 299){
            return success(result);
          }else{
            return failure(result);
          }
        })
        .catch(e => {
          let result = ({ data: e, statusCode: -1})
          return failure(result)
        })
};

const get = (path: string,
              options: any = { },
                success: (result: any) => void,
                  failure: (error: any) => void) => {

  const newBaseData = Utils.getBaseUrlData()

  let defaultHeaders = {
    'Accept':       'application/json',
    'Content-Type': 'application/json',
    'Connection': 'keep-alive',
    'User-Agent': userAgent(),
    'x-api-key': `${newBaseData.xApiKey}`,
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0'
  }
  let headers = options.headers ? {
    ...defaultHeaders,
    ...options.headers
  } : defaultHeaders
  let data = {
    ...options,
    headers,
    method: 'GET',
  }
  // DEBUG LOGS
  // SEE .env
  console.log("ENV:", env.IS_DEBUG);
  if (env.IS_DEBUG){
    console.log("PATH:", `${newBaseData.baseUrl}/${path}`);
    console.log("USER-AGENT:" , userAgent());
    console.log("HEADERS:", headers);
    console.log('GET-DATA:', data);
  }
  return fetch(`${newBaseData.baseUrl}/${path}`, data)
        .then(response => {
          const statusCode = response.status;
          const data = response.json();
          return Promise.all([statusCode, data]);
        })
        .then((response: any) => {
          if (env.IS_DEBUG){
            console.log("GET RESPONSE: ", response);
          }
          let status = parseInt(response[0]);
          let result = ({ data: response[1], statusCode: status})
          if (result.data.errorMessage)
            return failure(result)

          if (status >= 200 && status <= 299){
            return success(result);
          }else{
            return failure(result);
          }

        })
        .catch(e => {
          let result = ({ data: e, statusCode: -1})
          return failure(result)
        })
};

const put = (path: string,
              options: any = { },
                success: (result: any) => void,
                  failure: (error: any) => void) => {
  const newBaseData = Utils.getBaseUrlData()

  let defaultHeaders = {
    'Accept':       'application/json',
    'Content-Type': 'application/json',
    'Connection': 'keep-alive',
    'User-Agent': userAgent(),
    'x-api-key': `${newBaseData.xApiKey}`,
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0'
  }
  let headers = options.headers ? {
    ...defaultHeaders,
    ...options.headers
  } : defaultHeaders
  let data = {
    ...options,
    headers,
    method: 'PUT',
  }
  // DEBUG LOGS
  // SEE .env
  console.log("ENV:", env.IS_DEBUG);
  if (env.IS_DEBUG){
    console.log("PATH:", `${newBaseData.baseUrl}/${path}`);
    console.log("USER-AGENT:" , userAgent());
    console.log("HEADERS:", headers);
    console.log('DELETE-DATA:', data);
  }
  return fetch(`${newBaseData.baseUrl}/${path}`, data)
        .then(response => {
          const statusCode = response.status;
          const data = response.json();
          return Promise.all([statusCode, data]);
        })
        .then((response: any) => {
          if (env.IS_DEBUG){
            console.log("DELETE RESPONSE: ", response);
          }
          let status = parseInt(response[0]);
          let result = ({ data: response[1], statusCode: status})
          if (result.data.errorMessage)
            return failure(result)

          if (status >= 200 && status <= 299){
            return success(result);
          }else{
            return failure(result);
          }
        })
        .catch(e => {
          let result = ({ data: e, statusCode: -1})
          return failure(result)
        })
};

const _delete = (path: string,
                  options: any = { },
                    success: (result: any) => void,
                      failure: (error: any) => void) => {
  const newBaseData = Utils.getBaseUrlData()

  let defaultHeaders = {
    'Accept':       'application/json',
    'Content-Type': 'application/json',
    'Connection': 'keep-alive',
    'User-Agent': userAgent(),
    'x-api-key': `${newBaseData.xApiKey}`,
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0'
  }
  let headers = options.headers ? {
    ...defaultHeaders,
    ...options.headers
  } : defaultHeaders
  let data = {
    ...options,
    headers,
    method: 'DELETE',
  }
  // DEBUG LOGS
  // SEE .env
  console.log("ENV:", env.IS_DEBUG);
  if (env.IS_DEBUG){
    console.log("PATH:", `${newBaseData.baseUrl}/${path}`);
    console.log("USER-AGENT:" , userAgent());
    console.log("HEADERS:", headers);
    console.log('PUT-DATA:', data);
  }
  return fetch(`${newBaseData.baseUrl}/${path}`, data)
        .then(response => {
          const statusCode = response.status;
          const data = response.json();
          return Promise.all([statusCode, data]);
        })
        .then((response: any) => {
          if (env.IS_DEBUG){
            console.log("PUT RESPONSE: ", response);
          }
          let status = parseInt(response[0]);
          let result = ({ data: response[1], statusCode: status})
          if (result.data.errorMessage)
            return failure(result)

          if (status >= 200 && status <= 299){
            return success(result);
          }else{
            return failure(result);
          }
        })
        .catch(e => {
          let result = ({ data: e, statusCode: -1})
          return failure(result)
        })
};

export {
  post,
  get,
  put,
  _delete,
}
