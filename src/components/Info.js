import profile_pic from '../images/profile_pic.jpg';
import {BsFillEnvelopeFill} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';
import '../App.css';

function Info() {
    return (
        <div className='info-div'>
            <div className="info-head">
                <img src={profile_pic} alt="" />
                <h2>Nicholas Amemazior</h2>
                <h3>Frontend Developer</h3>
                <p>Website Link Here</p>
            </div>

            <div className='info-links'>
                <a href="mailto:amemaziornicholas77@gmail.com" className='link-1'> <BsFillEnvelopeFill/> <span>Email</span></a>
                <a 
                href="https://www.linkedin.com/in/nicholas-amemazior-88b3601a3/" target="_blank" rel='noopener noreferrer'
                className='link-2'> 
                <FaLinkedin/> <span>LinkedIn</span>
                </a>
            </div>
        </div>
    )
}

export default Info;