import React from 'react';
import ContactForm from 'components/form/Form';
import Container from './styleConfig/App.styled';
import ContactList from 'components/contacts/ContactList';
import Filter from 'components/filter/Filter';
import { nanoid } from 'nanoid';

export class App extends React.Component {
state = {
  contacts: [],
  filter: ''
};

formSubmitHandler = ({ name, number }) => {
  const newContact = {
    id: nanoid(),
    name,
    number
  };
  this.setState(({ contacts }) => (
    contacts.find(contact => contact.name === newContact.name) ?
    alert(`${newContact.name} is already in contacts`) :
    {contacts: [newContact, ...contacts]}
  ));
};

deleteContact = (contactId) => {
this.setState(({ contacts }) => ({
  contacts: contacts.filter(contact => contact.id !== contactId)
}))
};

handleChange = e => {
  this.setState({filter: e.currentTarget.value});
};

handleFilter = () => {
  const { contacts, filter } = this.state;
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((contact) => 
    contact.name.toLowerCase().includes(normalizedFilter));
};

render() {
  const { filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>
        <h2>Contacts</h2>
        <Filter
          filter={filter}
          onInputChange={this.handleChange}/>
        <ContactList 
          contacts={this.handleFilter()}
          onDeleteContact={this.deleteContact}
        />
      </Container>
      );
  };
};