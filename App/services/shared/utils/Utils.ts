import AsyncStorage from '@react-native-community/async-storage'
import * as GLOBAL from '../../../constants'
import { env } from '../../../config'


let THROTTLE_COUNT = 0;


function validateEmail(email: string){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

function validatePhoneNumber(phoneNum: string){

    var cleaned = ('' + phoneNum).replace(/\D/g, '')

    return cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)

}

const getBaseUrlData = () => {
    var baseUrl = env.PSG_BASE_URL
    var xApiKey = env.X_API_KEY
    const newBaseUrl: string = 'dev'

    switch(newBaseUrl){
      case 'dev':
        baseUrl = env.DEV_PSG_BASE_URL
        xApiKey = env.DEV_X_API_KEY
      break;
      case 'stage':
        baseUrl = env.STAGE_PSG_BASE_URL
        xApiKey = env.STAGE_X_API_KEY
      break;
      default:
        baseUrl = env.PSG_BASE_URL
        xApiKey = env.X_API_KEY
      break;
    }

    return {
        baseUrl: baseUrl,
        xApiKey: xApiKey
    }
}

const multipleTapHandler = (func: () => void, wait = 500) => {
    let handler: any;

    return function() {
        if (THROTTLE_COUNT === 0) {
            THROTTLE_COUNT++;
            func();
        }
        // Clear the previous timeout and set a new one.
        clearTimeout(handler);
        handler = setTimeout(() => (THROTTLE_COUNT = 0), wait);
    };
};

export default  {
    multipleTapHandler,
    validateEmail,
    validatePhoneNumber,
    getBaseUrlData,
}