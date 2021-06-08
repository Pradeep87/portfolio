import React from 'react'
import {Row, Col,} from 'react-bootstrap';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';



const Footer = () => {
    return (
        <>
          <Row id='contact'>
            <Col>
          <div className='bottom'>
      
          <div className="mt-3 text-center pb-5"> 
          <h3 className='' >how to Contact me</h3>
          <ul className='fb '>
              <li>
              <a href="https://www.facebook.com/profile.php?id=100025231511617" target="_blank" rel="noreferrer">
              <FacebookIcon  
                 fontSize="large"
              /> </a></li>

              <li> <a href="https://www.instagram.com/pradeep87055/" target="_blank" rel="noreferrer"> 
             <InstagramIcon 
                fontSize="large"
              /></a> </li>

            <li> <a href="https://twitter.com/pradeep83849249" target="_blank" rel="noreferrer"> 
             <TwitterIcon
                fontSize="large"
              />          
              </a> </li>

              <li> <a href="https://www.linkedin.com/in/pradeep-rajput-a4640b214/" target="_blank" rel="noreferrer"> 
              <LinkedInIcon
                fontSize="large"
              />
                     
              </a> </li>

              <li> <a href="https://github.com/Pradeep87" target="_blank" rel="noreferrer"> 
              <GitHubIcon 
                 fontSize="large"
              />
                     
              </a> </li>


       <li></li>
            </ul> 
            <div>
             <div className='mx-4 pl-3 my-auto text-left obc'> 
              <p ><EmailIcon fontSize="large"/> pradeep87055@gmail.com </p>
              <p > <PhoneIcon fontSize="large"/> 8755819345</p></div>
             </div>
             </div>
            <div className='mx-auto pl-3 mt-3 mb-5 obc'> 
              <p ><HomeIcon
                fontSize="large"
              /> 37, Bapu Gram, Shivaji Nagar, Rishikesh, Uttarakhand 249202.  </p>
              </div>
            
          </div>
            </Col>
          </Row>
        </>
    )
}

export default Footer;
