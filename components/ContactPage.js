import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
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
