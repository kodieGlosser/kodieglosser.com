import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope'
import PropTypes from 'prop-types';

const ContactPage = (props) => (
    <ul className="icons_envelope">
        <li><a href="mailto:kodieglosser@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
        </a></li>
    </ul>
)

ContactPage.propTypes = {
}

export default ContactPage
