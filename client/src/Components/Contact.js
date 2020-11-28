import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Feed } from 'semantic-ui-react';
import { deleteContact, getContact } from '../js/actions/contacts';
import { toggleTrue } from '../js/actions/edit';
import './Contact.css';
const Contact = ({ contact }) => {
      const dispatch = useDispatch()
      return (


            <Feed className="feed" style={{ color: "white", width: "100%", display: "flex", justifyItem: 'space-between' }}>

                  {contact.name}


                  <Feed.Event>
                        <Feed.Label image='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                        <Feed.Content>
                              <Feed.Date style={{ color: "white" }}
                                    content={contact.phone} />


                              <Feed.Summary style={{ color: "white" }} >
                                    {contact.email}
                              </Feed.Summary>
                        </Feed.Content>
                  </Feed.Event>

                  <Link to={`/edit/${contact._id}`}>
                        <Button inverted color='yellow'
                              onClick={() => {
                                    dispatch(getContact(contact._id));
                                    dispatch(toggleTrue())
                              }}>
                              Edit
                                    </Button>
                  </Link>

                  <Button inverted color='red' onClick={() => dispatch(deleteContact(contact._id))}>
                        Delete
                        </Button>


            </Feed>)
}

export default Contact
