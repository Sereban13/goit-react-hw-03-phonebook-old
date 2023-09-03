import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

import { GlobalStyle } from './GlobalStyled';

import { Section, Title } from './App.styled';
import { SearchBar } from './SearchBar/SearchBar';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeNameFilter = newName => {
    this.setState({
      filter: newName,
    });
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const isExistName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExistName) {
      alert(`Contact "${newContact.name}" is already exist`);
      return;
    }

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

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts !== null) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Section>
        <Title>Phonebook</Title>

        <ContactForm onAdd={this.addContact} contacts={this.state.contacts} />

        <Title>Contacts</Title>

        <SearchBar filterName={filter} onChangeName={this.changeNameFilter} />

        <ContactList contacts={visibleContacts} onDelete={this.handleDelete} />

        <GlobalStyle />
      </Section>
    );
  }
}
