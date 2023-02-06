import React from "react";
import PropTypes from 'prop-types';
import { ContactWrapper, ContactName, ContactNumber, DeleteButton } from './ContactListItem.styled'

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
    return (
      <ContactWrapper key={id}>
        <ContactName>
            {name}
            <ContactNumber> 
                {number}
            </ContactNumber>
        </ContactName>
        <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
    </ContactWrapper>
    );
  }; 

export default ContactListItem;

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };
  