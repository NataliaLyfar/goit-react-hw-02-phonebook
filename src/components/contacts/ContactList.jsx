import PropTypes from 'prop-types';
import Contact from "./Contact";
import { List } from './Contact.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
    <List>
    {contacts.map(({id, name, number}) => (
        <Contact key={id} id={id}
            name={name} number={number}
            onDelete={onDeleteContact}
            />
        ))}
    </List>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default ContactList;