import React from "react";
import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';


const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;


// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };