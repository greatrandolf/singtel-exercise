import menu from './shared/menu-service'
import firestoreAuth from './firestore-auth-module'
import firestore from './firestore-module'
import auth from './shared/auth-service'
import login from './shared/login-service'
import profile from './shared/profile-service'
import registration from './shared/registration-service'
import drawing from './shared/drawing-service'
import referral from './shared/referral-service'
import location from './shared/location-service'
import home from './shared/home-service'
import tos from './shared/tos-service'
import about from './shared/about-service'
import mobile from './shared/mobile-service'
import forgotPin from './shared/forgot-pin-service'
import bank from './shared/bank-service'
import messaging from './shared/messaging-service'
import dashboard from './shared/dashboard-service'

const services = {
}

export type ApiAuth = typeof auth
export type ApiMenu = typeof menu
export type ApiLogin = typeof login
export type ApiProfile = typeof profile
export type ApiRegistration = typeof registration
export type ApiDrawing = typeof drawing
export type ApiTOS = typeof tos
export type ApiAbout = typeof about
export type ApiReferral = typeof referral
export type ApiLocation = typeof location
export type ApiHome = typeof home
export type ApiMobile = typeof mobile
export type ApiForgotPin = typeof forgotPin
export type ApiBank = typeof bank
export type ApiMessaging = typeof messaging
export type ApiDashboard = typeof dashboard

export type ApiFirestore = typeof services

export type ApiAction = any

export default services