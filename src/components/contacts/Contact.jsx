import PropTypes from 'prop-types';

const Contact = ({ id, name, number, onDelete }) => {
    return (
        <li key={id} id={id}>
            <p>{name}: {number}</p>
            <button
            onClick={() => onDelete(id)}>Delete</button>
        </li>
    );
};

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func
};

export default Contact;