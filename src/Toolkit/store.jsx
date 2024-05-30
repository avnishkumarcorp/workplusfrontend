import { combineReducers } from "redux"
import persistReducer from "redux-persist/es/persistReducer"
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/es/persistStore"
import AuthSlice from "./AuthSlice"
import { configureStore } from "@reduxjs/toolkit"
import AllUsersSlice from "./AllUsersSlice"
import MainDataSlice from "./MainDataSlice"
import RoleSlice from "./RoleSlice"
import AllProcessSlice from "./AllProcessSlice"
import AllReportsSlice from "./AllReportsSlice"
import ScreenShotSlice from "./ScreenShotSlice"
import SendReportSlice from "./SendReportSlice"
import DailyActivitySlice from "./DailyActivitySlice"

const reducers = combineReducers({
  auth: AuthSlice,
  alluser: AllUsersSlice,
  mainData: MainDataSlice,
  role: RoleSlice,
  allprocess: AllProcessSlice,
  allreports: AllReportsSlice,
  screenshot: ScreenShotSlice,
  sendReport: SendReportSlice,
  activity: DailyActivitySlice,
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serialization check
    }),
})

export const persistor = persistStore(store)
