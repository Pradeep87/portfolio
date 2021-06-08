import React from 'react'
import {Row, Col,} from 'react-bootstrap';



export const Frame = (props) => {
    return (
        <><div className='project'>
          <div className='viw mx-auto'> 
             <a href={props.link} target='_blank' rel="noreferrer" >  <h5>Covid-19updateApi</h5></a>
             </div>  
             <div className='sec-viw mx-auto mt-4'> 
             <a href={props.link} target='_blank' rel="noreferrer" >  <h5>Unlimited-quotes</h5></a>
             </div>  
             <div className='th-viw mx-auto mt-4'> 
             <a href={props.link} target='_blank' rel="noreferrer" >  <h5>Countries-population</h5></a>
             </div>  
             
             </div>
        </>
    )
}




const Project = () => {
    return (
        <>
           
         <Row id='p-viw'>
             <Col className='col-md-10 mx-md-auto mb-3 text-center '> 
             <h3 className='mb-3' >My Work </h3>
             
             <Frame
                 link='https://pradeep87.github.io/Mywork-live/'
                 
             />
        </Col> 
         </Row>  

        </>
    )
}

export default Project;


