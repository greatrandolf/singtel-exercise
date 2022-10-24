import Result from 'folktale/result'
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import '@react-native-firebase/auth'
import { User } from '../models'
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';


const auth = firebase.auth()
const firestore = firebase.firestore();
const Timestamp = firebase.firestore.Timestamp;
const FieldValue = firebase.firestore.FieldValue;

const buildType = 'staging'

const head = (snapshot: any) =>  snapshot.docs.length ? snapshot.docs[0] : null

// const getAccountDetails = (id: string): Result<User> => 
//     firestore
//         .collection(`${buildType}/usersDoc/users`)
//         .where('id', '==', id)
//         .get()
//         .then(head)
//         .then(doc => 
//             doc
//                 ? Result.Ok(doc.data())
//                 : Result.Error('No order registered with orderId')
//         )
//         .catch(error => Result.Error(error));

export default {
    
}