import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faInstagram, faTelegram,faTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons';
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer_container">


        <div className="footer_logo">
          <h2>Cine<span className="helperText">Park</span></h2>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias ipsam nihil beatae tenetur deserunt.</p>
        </div>
        <div className="footer_support">
          <ul>
            <li className="link_item">Support</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Downdloads</li>
            <li>Locate a dealer</li>
            <li>Spare parts</li>
          </ul>
        </div>
          <div className="footer_section">
            <ul>
              <li className="link_item">CinePark</li>
              <li>About CinePark</li>
              <li>CinePark Design</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>CinePark Access</li>
            </ul>
          </div>
          <div className="footer_social">
            <ul>
              <li className="link_item">Social Media</li>
              <li><FontAwesomeIcon icon={faInstagram} /> Instagram</li>
              <li><FontAwesomeIcon icon={faTelegram} /> Telegram</li>
              <li><FontAwesomeIcon icon={faTwitter} /> Twitter</li>
              <li><FontAwesomeIcon icon={faFacebook} /> Facebook</li>
              {/* <li><FontAwesomeIcon icon={faUserPlus} />Follow us</li> */}
            </ul>
          </div>

       
      </div>
      <div className="footer_word">
        <p>Copyright 2024 | Rukhsora</p>
       </div>
    </footer>
  )
}

export default Footer