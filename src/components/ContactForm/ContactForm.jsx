import { Formik, Form } from 'formik';
import { Input } from './ContactForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const schema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),

  number: Yup.number()
    .positive('Must be >0')
    .min(10, 'Not short number!')
    .required('Required'),
});

export const ContactForm = ({ onAdd }) => (
  <div>
    <h1>Ad contact</h1>
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
      <Form>
        <label>
          Name
          <Input name="name" placeholder="..." />
        </label>

        <label>
          Number
          <Input name="number" type="number" placeholder="..." />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);
