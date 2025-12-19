import { createStore } from 'redux'
import contactsReducer from './contactsSlice'

const store = createStore(contactsReducer)
export default store
