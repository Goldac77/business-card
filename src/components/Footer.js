import {FaGithubSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa'
import '../App.css';

function Footer() {
    return (
        <div className="footer-links">
            <a href="https://twitter.com/home" target="_blank" rel='noopener noreferrer'> <FaTwitterSquare/></a>
            <a href="https://github.com/Goldac77" target="_blank" rel='noopener noreferrer'> <FaGithubSquare/></a>
        </div>
    )
}

export default Footer;