'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import {createLogger} from 'redux-logger'

// // Navigation
// import { NavigatorTabHealth} from './tabHealth/navigationConfiguration'
// import { NavigatorTabLoyalty } from './tabLoyalty/navigationConfiguration'
// import { NavigatorTabMyPage } from './tabMyPage/navigationConfiguration'
// import { createNavigator, loginReducer } from './login/navigationConfiguration'
// import { TabBar, tabBarReducer } from './tabBar/navigationConfiguration'
import { OutputReducer } from './reducer/outputReducer'

// Middleware
const middleware = () => {
  return applyMiddleware(createLogger())
}



export const stores = () =>{
  //const  NavigatorLogin = createNavigator(signedIn)
  return createStore(
    combineReducers({
      output:OutputReducer,
      // login: loginReducer,
      // tabBar: tabBarReducer,
      // tabHealth: (state,action) => NavigatorTabHealth.router.getStateForAction(action,state),
      // tabLoyalty: (state,action) => NavigatorTabLoyalty.router.getStateForAction(action,state),
      // tabMyPage: (state,action) => NavigatorTabMyPage.router.getStateForAction(action,state),
    }),
    middleware(),
  )
}
