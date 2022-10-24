import Result from 'folktale/result'
import { Auth,} from '../../models'
import { get, put, post } from '../../api'
import { Error } from '../../models'
import { strings } from '../../localization/strings'

const getDashboardDetails = (emailAddress: string, auth: Auth) => {
  return Result.Ok(true)
}

export default {
    getDashboardDetails,
}