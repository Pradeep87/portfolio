import React from 'react'
import {Row, Col} from 'react-bootstrap';
import Data from '../data/Mdata';
import Edu from '../parts/Edu';
import Sdata from '../data/Sdata';
import Wdata from '../data/Webd';
import Para from '../parts/Para';


const DataCard=(props)=>{
    return(<>
                <li>{props.one} </li>
                </>);
}

const NdataCard=(val)=>{

    return(<>
<DataCard
          one={val.skill}
       />
    </>)
}

const Content = () => {
    return (
        <>

        <Row id='about'>
            <Col className=' mx-md-auto'> 
            <div > <Para/> </div>
            <div className='p-5 pb-0 Eda'>
           
        <div className='bor'> <Edu/> </div>

      <div className='bor'>
       <h3>My  Skills</h3>
        <ul className='otList'>
        <li>  <h6>Web design</h6>
        <ul className="InnList">  
                      {Wdata.map(NdataCard)}</ul> </li>
            <li>  <h6>MERN development</h6>
            <ul className="InnList"> 
                      {Data.map(NdataCard)}</ul> </li>



                      <li> <h6> Node Package Manager</h6> </li>    
              
                      <li> <h6> Office Automation tools </h6> </li>    
                      <li> <h6>  Photoshop </h6> </li>      
                      

                      <li>   <h6>Online Marketing & Advertising</h6>
                      <ul className="InnList"> 
                      {Sdata.map(NdataCard)}</ul> </li>

              
       </ul>
       </div>

       </div>
            </Col>
        </Row>
        
        </>
    )
}

export default Content;
