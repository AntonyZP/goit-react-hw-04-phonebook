import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from '../../contacts.json';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { Section,  Title, SubTitle, ListWrapper} from "components/App/App.styled";

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts;
  } else {
    return initialContacts;
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    return setContacts(prevContacts =>
      prevContacts.filter(contact => {
        return contactId !== contact.id;
      })
    );
  };

  const formSubmitHandler = contact => {   
    contacts.some(({ name }) => name === contact.name)
    ? alert(`${contact.name} is already in contacts`)
    : setContacts(prevContacts => [
      {
        id: nanoid(),
        ...contact,
      },
        ...prevContacts,
      ],
    );
  }

  const changeFilter =e=> {
    setFilter(e.currentTarget.value)
  }

  const getVisibleContacts = contacts.filter(contact =>
        { return contact.name.toLowerCase().includes(filter.toLowerCase())}
  )

  return ( 
    <Section>
      <Title>Phonebook</Title>
      <ContactForm contacts={contacts} onSubmit ={formSubmitHandler}></ContactForm>
    
      <SubTitle>Contacts</SubTitle>
      <ListWrapper>
        <Filter value={filter} onChange={changeFilter} />      
        <ContactList contacts={getVisibleContacts} onDeleteContact={deleteContact}/>
      </ListWrapper>
    
    </Section>
    );
  };

