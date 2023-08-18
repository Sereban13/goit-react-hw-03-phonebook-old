import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

import { GlobalStyle } from './GlobalStyled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  handleDelete = сontactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== сontactId
        ),
      };
    });
  };
  render() {
    return (
      <div>
        <ContactForm onAdd={this.addContact} />
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.handleDelete}
        />
        <GlobalStyle />
      </div>
    );
  }
}
