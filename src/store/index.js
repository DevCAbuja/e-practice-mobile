import { combineReducers, createStore } from "redux";
import userReducers from "./reducers/user.reducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
 
const persistConfig = {
  key: 'v001',
  storage,
}

// Combining the different Reducers
const combinedReducers = combineReducers({
  user: userReducers,
});

//Adding the combinedReducer to the Persisted Reducer
const persistedReducer = persistReducer(persistConfig, combinedReducers)

export default createStore(persistedReducer);