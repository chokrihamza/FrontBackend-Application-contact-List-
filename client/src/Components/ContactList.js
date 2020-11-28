import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../js/actions/contacts'
import Contact from './Contact'
import { Loader, Card } from 'semantic-ui-react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const ContactList = () => {
      const contacts = useSelector(state => state.contactReducer.contacts);
      const loadContacts = useSelector(state => state.contactReducer.loadContacts);

      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(getContacts);

      }, [])

      return (
            <Container style={{ display: "flex", justifyContent: "center" }}>
                  <Card style={{ backgroundColor: "Turquoise", width: "50%" }}>
                        <Card.Content>
                              {loadContacts ?
                                    <Loader active inline /> :
                                    (contacts.map(el =>
                                          <Contact key={el._id} contact={el} />))}
                        </Card.Content>
                  </Card>
            </Container>
      )
}

export default ContactList
