import { contactReducer } from './contacts';
import { combineReducers } from 'redux'
import { editReducer } from './edit';

export const rootReducer = combineReducers({
      contactReducer: contactReducer,
      editReducer: editReducer,

})