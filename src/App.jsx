import React from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import {Container, Header} from './styleConfig/App.styled';
import Section from 'components/section/Section';
import ContactForm from 'components/contactForm/Form';
import ContactList from 'components/contacts/ContactList';
import Filter from 'components/filter/Filter';


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
    Notify.info(`${newContact.name} is already in contacts`, 
    {position: 'center-top', fontSize: '16px', width: '370px', info: {background: 'rgba(3, 7, 27)'}}
    ) :
    {contacts: [newContact, ...contacts].sort()}
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
        <Header>Phonebook</Header>
        <Section>
          <ContactForm onSubmit={this.formSubmitHandler}/>
        </Section>
        <Section title={"Contacts"}>
          <Filter
            filter={filter}
            onInputChange={this.handleChange}/>
          <ContactList 
            contacts={this.handleFilter()}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Container>
      );
  };
};