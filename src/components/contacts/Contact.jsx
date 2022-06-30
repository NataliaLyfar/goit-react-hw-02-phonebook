import PropTypes from 'prop-types';
import {FaUserMinus} from "react-icons/fa";
import { ListItem, Button } from './Contact.styled';

const Contact = ({ id, name, number, onDelete }) => {
    return (
        <ListItem key={id} id={id}>
           {name}: {number}
            <Button
              onClick={() => onDelete(id)}>
              <FaUserMinus/>
            </Button>
        </ListItem>
    );
};

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func
};

export default Contact;