import { useState } from 'react';
 import PropTypes from 'prop-types';

 import {Form, Label, ContactInput, AddButton} from './ContactForm.styled'

export const ContactForm =({onSubmit})=> {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChangeName = e => {
        setName(e.currentTarget.value)
    }
    
    const handleInputChangeNumber = e => {
        setNumber(e.currentTarget.value)
    }

    const handleSubmit =e => {
        e.preventDefault();
        onSubmit({name, number});
        reset();
    }

    const reset=()=>{
        setName('');
        setNumber('');
        }

    return (   
        <Form onSubmit={handleSubmit}>
            <div>
                <Label>
                Name
                <ContactInput
                    type="text"
                    name="name"
                    value = {name}
                    onChange = {handleInputChangeName}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                </Label>
                <Label>
                Number
                <ContactInput
                    type="tel"
                    name="number"
                    value = {number}
                    onChange={handleInputChangeNumber}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                </Label>
            </div>            
            <AddButton type='submit' disabled={!name || !number} >
                        Add contact                           
             </AddButton>
          </Form>  
    );
}
        
export default ContactForm;

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};

