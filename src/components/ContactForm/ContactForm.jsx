import { Formik } from 'formik';
import { Input, Forma, Label, ButtonSubmit } from './ContactForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const schema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),

  number: Yup.number()
    .positive('Must be >0')
    .min(7, 'Not short number!')
    .required('Required'),
});

export const ContactForm = ({ onAdd, contacts }) => (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        const isExistName = contacts.find(
          contact => contact.name === values.name
        );
        if (isExistName) {
          alert(`Contact "${values.name}" is already exist`);
        } else {
          onAdd({ ...values, id: nanoid() });
          actions.resetForm();
          console.log(values);
        }
      }}
    >
      <Forma>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter the name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />

        <Label htmlFor="number">Number</Label>
        <Input
          id="number"
          name="number"
          type="tel"
          placeholder="Enter the phone number..."
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />

        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </Forma>
    </Formik>
  </div>
);
