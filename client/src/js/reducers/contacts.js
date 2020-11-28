import { GET_CONTACTS_LOAD, GET_CONTACTS_SUCCESS, GET_CONTACTS_FAILURE, GET_CONTACT } from '../constants/constants';
// INITIALSTATE
const initialSate = {
      loadContacts: false,
      contacts: [],
      errors: null,
      user: {}


}

//Contact reducer 

export function contactReducer(state = initialSate, { type, payload }) {
      switch (type) {
            case GET_CONTACTS_LOAD:
                  return { ...state, loadContacts: true };
            case GET_CONTACTS_SUCCESS:
                  return { ...state, contacts: payload, loadContacts: false }
            case GET_CONTACTS_FAILURE:
                  return { ...state, loadContacts: false, errors: payload }
            case GET_CONTACT:
                  return { ...state, user: payload }
            default: return state;

      }
}