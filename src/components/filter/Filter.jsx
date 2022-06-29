import PropTypes from 'prop-types';

const Filter = ({ filter, onInputChange }) => {
    return (
        <label>Find contacts by name
          <input type='text' name='filter' 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={filter}
            onChange={onInputChange}
          />
        </label>
    )
};

Filter.propTypes = {
filter: PropTypes.string,
onInputChange: PropTypes.func
};

export default Filter;