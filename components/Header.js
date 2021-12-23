import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">

        </div>
        <div className="content">
            <div className="inner">
                <h1>Kodie Glosser</h1>
                <p>Software Engineer. Takin' care of business <br />
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('intro') }}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('talks') }}>Talks</a></li>
                <li><a href="javascript:;" onClick={() => {window.open('/files/resume.pdf');}}>Resume</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('socials') }}>Socials</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
