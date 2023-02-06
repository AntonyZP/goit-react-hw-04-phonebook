 import React, {Component} from "react";
 import PropTypes from 'prop-types';

 import {Form, Label, ContactInput, AddButton} from './ContactForm.styled'


 class ContactForm extends Component {
    state = { 
        name: '',
        number: ''};

    handleInputChange = e=> {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value})
    };

    handleSubmit =e => {
        e.preventDefault();
        const { onSubmit } = this.props;

        onSubmit(this.state);
        this.reset();
    }

    reset=()=>{
        this.setState({
            name: '',
            number:''})
    }

    render() {
        const { name, number } = this.state;
        return (   
        <Form onSubmit={this.handleSubmit}>
            <div>
                <Label>
                Name
                <ContactInput
                    type="text"
                    name="name"
                    value = {name}
                    onChange = {this.handleInputChange}
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
                    onChange={this.handleInputChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                </Label>
            </div>            
            <AddButton type='submit' disabled={!name || !number} >
                        Add contact                           
             </AddButton>
          </Form>  );
        }
    } 
    
export default ContactForm;


ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};

