import PropTypes from 'prop-types';
import React from "react";
import { nanoid } from 'nanoid';

class ContactForm extends React.Component {
    state = {
        name: '',
        number: ''
    };

    static propTypes = {
      onSubmit: PropTypes.func.isRequired,
    };

    handleChange = e => {
      const {name, value} = e.currentTarget;
      this.setState({[name]: value});
    };
    handleSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state);
      this.reset();
    };
    reset = () => {
      this.setState({
      name: '',
      number: ''
      });
    };

    render() {
      const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameInputId}>Name</label>
          <input type='text' name='name' pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
            id={nanoid()}
          />
            <label htmlFor={this.numberInputId}>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
            id={nanoid()}
          />
          <button type='submit'>Add contact</button>
          </form> 
        );
    };
};

export default ContactForm;