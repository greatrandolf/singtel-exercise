// config/index.ts
import DebugConfig from './debugConfig'
import env from "./env"

declare global {
    interface Console {
        tron: any
    }
    interface NodeModule {
        hot: any
    }
}

if (__DEV__) {
    // If ReactNative's yellow box warnings are too much, it is possible to turn
    // it off, but the healthier approach is to fix the warnings.  =)
    // console.disableYellowBox = !DebugConfig.yellowBox
}
  
export {
    env
}
