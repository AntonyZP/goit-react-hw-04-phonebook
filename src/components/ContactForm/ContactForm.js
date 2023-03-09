import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormAdd, Label, AddButton, ContactInput } from './ContactForm.styled'

const ContactForm =({ onSubmit, contacts })=> {
  const initialsValues = {
    name: '',
    number: '',
  };
  const handleSubmit = (values, {resetForm}) => {
    onSubmit(values)
    resetForm();
  }    

  const UserSchema = yup.object().shape({
  name: yup.string().min(2).max(30).required(),
  number: yup.string().min(12).max(30).required(),
  });

  return (   
    <Formik
      initialValues={initialsValues}
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
                  />
              <div>
                <ErrorMessage name="name" />
              </div>               
              </Label>
              <Label>
              Number
              <ContactInput
                  type="tel"
                  name="number"
                  />
              <div>
                <ErrorMessage name="number" />
              </div>   
              </Label>
          </div>            
          <AddButton type='submit' disabled={!props.values.name || !props.values.number} >
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
