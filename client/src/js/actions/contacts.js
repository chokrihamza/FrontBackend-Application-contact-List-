import {
      GET_CONTACTS_LOAD,
      GET_CONTACTS_SUCCESS,
      GET_CONTACTS_FAILURE,
      GET_CONTACT,
      //POST_CONTACT,
      // DELETE_CONTACT,
      //  EDIT_CONTACT,
} from '../constants/constants'

import axios from 'axios'
// get all the contacts 
export const getContacts = async (dispatch) => {
      dispatch({ type: GET_CONTACTS_LOAD })
      try {
            let result = await axios.get('/api/contact');
            console.log(result)
            dispatch({ type: GET_CONTACTS_SUCCESS, payload: result.data.response })
      } catch (e) {
            dispatch({ type: GET_CONTACTS_FAILURE, payload: e })
      }
}

//delete a contact by id user 
export const deleteContact = (id) => (dispatch) => {
      axios.delete(`/api/contact/${id}`)
            .then(res => dispatch(getContacts))
            .catch(err => console.log(err))
}
//get a contact by id user
export const getContact = (id) => (dispatch) => {
      axios.get(`/api/contact/${id}`)
            .then(res => dispatch({ type: GET_CONTACT, payload: res.data.response }))
            .catch(err => console.log(err))
}
// Post a contact
export const postContact = (user) => (dispatch) => {
      axios.post('/api/contact/', user)
            .then(dispatch(getContacts))
            .catch(err => console.log(err))


}

export const editContact = (id, user) => (dispatch) => {
      axios.put(`/api/contact/${id}`, user)
            .then(dispatch(getContacts))
            .catch(err => console.log(err))


}