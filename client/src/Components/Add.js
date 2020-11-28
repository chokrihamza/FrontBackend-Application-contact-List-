import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { editContact, postContact } from '../js/actions/contacts'
import { Link } from 'react-router-dom';
const Add = () => {
      const dispatch = useDispatch()
      const [user, setUser] = useState({
            name: "",
            email: "",
            phone: ""
      })

      const userReducer = useSelector((state) => state.contactReducer.user)

      const edit = useSelector(state => state.editReducer.edit)
      useEffect(() => {
            edit ? setUser(userReducer)
                  : setUser({
                        name: "",
                        email: "",
                        phone: ""
                  })

      }, [edit, userReducer]);


      function handleContact() {
            if (edit) {
                  dispatch(editContact(userReducer._id, user));
            } else {
                  dispatch(postContact(user));
            }
      }
      const handleChange = (e) => {
            e.preventDefault()
            setUser({ ...user, [e.target.name]: e.target.value })
      }

      return (
            <Form >
                  <Form.Field>
                        <label>Name</label>
                        <input value={user.name} placeholder='Name' name="name" onChange={handleChange} />
                  </Form.Field>
                  <Form.Field>
                        <label>Email</label>
                        <input value={user.email} placeholder='Email' name="email" onChange={handleChange} />
                  </Form.Field>
                  <Form.Field>
                        <label>Phone</label>
                        <input value={user.phone} placeholder='Phone' name="phone" onChange={handleChange} />
                  </Form.Field>

                  <Link to="/">
                        <Button type='submit' onClick={handleContact} >{edit ? "Edit" : "Save"}</Button>
                  </Link>
            </Form>
      )
}

export default Add
