import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

import { GlobalStyle } from './GlobalStyled';
import { SearchBar } from './SearchBar/SearchBar';
import Section from './Section/Section';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  changeNameFilter = newName => {
    console.log(newName);
    this.setState({
      filter: newName,
    });
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
    const { filter, contacts } = this.state;

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
    return (
      <div>
        <Section title={'Phonebook'} />
        <ContactForm onAdd={this.addContact} />
        <Section />

        <Section title={'Contacts'} />

        <SearchBar filterName={filter} onChangeName={this.changeNameFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.handleDelete} />
        <Section />

        <GlobalStyle />
      </div>
    );
  }
}
