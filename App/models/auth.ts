import { User } from './user'
export type Auth = {
    accountId: number,
    authData: string,
    verified: boolean,
    flags?: number,
    hideTestLocations?: boolean,
}
