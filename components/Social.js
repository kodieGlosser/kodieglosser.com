import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import PropTypes from 'prop-types';

const Social = (props) => (
    <ul className="icons">
        <li><a href="https:/www.linkedin.com/in/kodieglosser/" target="_blank">
           <FontAwesomeIcon icon={faLinkedin} />
        </a></li>
        <li><a href="https://github.com/KodieGlosser" target="_blank">
           <FontAwesomeIcon icon={faGithub} />
        </a></li>
    </ul>
)

Social.propTypes = {
}

export default Social
