import PropTypes from 'prop-types';
import Contact from "./Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
    <ul>
    {contacts.map(({id, name, number}) => (
        <Contact key={id} id={id}
            name={name} number={number}
            onDelete={onDeleteContact}
            />
        ))}
    </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default ContactList;