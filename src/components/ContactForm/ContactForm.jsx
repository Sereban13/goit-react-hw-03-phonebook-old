import { Formik } from 'formik';
import { Input, Forma } from './ContactForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const schema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),

  number: Yup.number()
    .positive('Must be >0')
    .min(7, 'Not short number!')
    .required('Required'),
});

export const ContactForm = ({ onAdd }) => (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
        console.log(values);
      }}
    >
      <Forma>
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          name="name"
          placeholder="Enter name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />

        <label htmlFor="number">Number</label>
        <Input
          id="number"
          name="number"
          type="tel"
          placeholder="Enter your phone number..."
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />

        <button type="submit">Add contact</button>
      </Forma>
    </Formik>
  </div>
);
