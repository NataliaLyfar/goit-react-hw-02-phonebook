import PropTypes from 'prop-types';
import {Subtitle} from './Section.styled'

const Section = ({title, children}) => {
    return (
        <section>
            <Subtitle>{title}</Subtitle>
            {children}
        </section>
    )
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
};

export default Section;