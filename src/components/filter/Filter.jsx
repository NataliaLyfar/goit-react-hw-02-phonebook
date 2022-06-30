import PropTypes from 'prop-types';
import {FaSearch} from "react-icons/fa";
import { FilterBox, Label, Input} from './Filter.styled';

const Filter = ({ filter, onInputChange }) => {
    return (
      <FilterBox>
        <Label>
        <FaSearch/>
          Find contacts by name
          <Input type='text' name='filter' 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={filter}
            onChange={onInputChange}
          />
        </Label>
      </FilterBox>
    );
};

Filter.propTypes = {
filter: PropTypes.string,
onInputChange: PropTypes.func
};

export default Filter;