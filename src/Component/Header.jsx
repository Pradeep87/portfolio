import React from 'react';
import {Row, Col} from 'react-bootstrap';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const header = () => {
    return (
        <>
       <Row id='home' >
       <Col className='col-md-10 mx-md-auto'>
         <div className='mx-auto had '>
          <div>  
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1" d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,48C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
            </div>
            <div className='name '>
              <div className='pro mx-auto'>
                 
                 </div>
          <div className='mx-auto d-md-flex '>
              <div className='mx-4 mt-4 '>
             <h3>Pradeep Rajput </h3>
              <p className="ftF">MERN Developer</p>
             </div>

             <div className='mx-4 pl-3 my-auto obc'> 
              <p > <EmailIcon/>pradeep87055@gmail.com </p>
              <p ><PhoneIcon/> 8755819345</p></div>
             
          </div>
          </div>
          
         </div>
         </Col>  
           </Row>
     
     </>
    )
}

export default header;
