import immutablePersistenceTransform from '../services/immutablePersistenceTransform'
import AsyncStorage from '@react-native-community/async-storage'

// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
const REDUX_PERSIST = {
  active: true,
  reducerVersion: '9',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    // Reducer keys that you do NOT want stored to persistence here.
    blacklist: ['login', 'forgotPin', 'registration', 'dashboard', 'beaconManager', 'referral'],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers' -> infinitered/ignite#409
    whitelist: ['appLaunch', 'auth', 'drawing', 'location', 'bank', 'mobile'],
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST