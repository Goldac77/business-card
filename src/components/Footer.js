import {FaGithubSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa'
import '../App.css';

function Footer() {
    return (
        <div className="footer-links">
            <a href="#"> <FaTwitterSquare/></a>
            <a href="#"> <FaGithubSquare/></a>
        </div>
    )
}

export default Footer;