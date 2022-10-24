import Result from 'folktale/result'
import '@react-native-firebase/auth'
import { Auth } from '../models'


const signInWithToken = (token: string): Result<Auth>  => null

export default {
  signInWithToken,
}