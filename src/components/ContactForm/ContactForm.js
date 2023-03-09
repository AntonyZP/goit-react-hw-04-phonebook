import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormAdd, Label, AddButton, ContactInput, ErrorNote } from './ContactForm.styled'

const ContactForm =({ onSubmit, contacts })=> {
  const initialValues = {
    name: '',
    number: '',
  };
  const handleSubmit = (values, {resetForm}) => {
    onSubmit(values)
    resetForm();
  }    

  const UserSchema = yup.object().shape({
  name: yup.string().min(1).max(18).required(),
  number: yup.string().min(5).max(18).required(),
  });

  return (   
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
{props => (
          <FormAdd autoComplete ='off'>
          <div>
              <Label>
              Name
              <ContactInput
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  placeholder="Tom Riddle"
                  required
                  />
              <ErrorNote>
                <ErrorMessage name="name" />
              </ErrorNote>               
              </Label>
              <Label>
              Number
              <ContactInput
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  placeholder="+380..."
                  required
                  />
              <ErrorNote>
                <ErrorMessage name="number" />
              </ErrorNote>   
              </Label>
          </div>            
          <AddButton type='submit'  >
            Add contact                           
          </AddButton>
        </FormAdd> )}
      </Formik>
  );
}
export default ContactForm;

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};
