import Result from 'folktale/result'
import { Auth, } from '../../models'
import { get, put, post } from '../../api'
import { User, Error, } from '../../models'

const signIn = (userName: string, pin: string) => {
  const signInPararms = {
    userName,
    pin,
  }

  const data = {
    body: JSON.stringify(signInPararms),
  }
  return post(`account/auth`, data,
          (success => {
            const data = success.data
            return Result.Ok(data)
          }),
          (failure => {
            let status = parseInt(failure.statusCode);
            const errorDefault: Error = {
              genericError: 'Something went wrong please try again',
              statusCode: status
            }
            return Result.Error(errorDefault)
          }))
}

export default {
    signIn,
}