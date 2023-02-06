import React, { Component } from "react";
import { nanoid } from 'nanoid'
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { Section,  Title, SubTitle, ListWrapper} from "components/App/App.styled";

export default class App extends Component {
  state ={
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:'', 
  }

  componentDidMount(){
    const savedContacts = localStorage.getItem('contacts')
    if (savedContacts !== null){
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({contacts: parsedContacts})
    } else {
      this.setState(this.state.contacts)
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = contact => {
    const { contacts } = this.state;
    contacts.some(({ name }) => name === contact.name)
    ? alert(`${contact.name} is already in contacts`)
    :
    this.setState(prevState => ({
      contacts: [
          { id: nanoid(), 
          name: contact.name, 
          number: contact.number },
          ...prevState.contacts,
      ],
    }));
  };

deleteContact = (contactId) =>{
  this.setState(prevState =>({
    contacts: prevState.contacts.filter(contact =>
       contact.id !== contactId),
  }))
}

changeFilter =e=> {
  this.setState({filter: e.currentTarget.value})
}

getVisibleContacts = () => {
  const { contacts, filter } = this.state;
  return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  
}

render () {
  const { filter} = this.state;
  const visibleContacts = this.getVisibleContacts();

    return ( 
      <Section>
        <Title>Phonebook</Title>
        <ContactForm onSubmit ={this.formSubmitHandler} ></ContactForm>
      
        <SubTitle>Contacts</SubTitle>
        <ListWrapper>
          <Filter value={filter} onChange={this.changeFilter} />      
          <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
        </ListWrapper>
      
      </Section>
     );
  }
}
 