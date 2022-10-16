import profile_pic from '../images/profile_pic2.jpg';
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
                <a href="#" className='link-1'> <BsFillEnvelopeFill/> <span>Email</span></a>
                <a href="#" className='link-2'> <FaLinkedin/> <span>LinkedIn</span></a>
            </div>
        </div>
    )
}

export default Info;