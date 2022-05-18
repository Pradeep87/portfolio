import React from 'react'
import { Row, Col } from 'react-bootstrap'

export const Frame = (props) => {
  return (
    <>
      <div className="project">
        <div className="viw mx-4 mt-4">
          <a href={props.link} target="_blank" rel="noreferrer">
            <h5>{props.heading}</h5>
          </a>
        </div>
      </div>
    </>
  )
}

const Project = () => {
  return (
    <>
      <Row id="p-viw">
        <Col className="col-md-10 mx-md-auto mb-3 text-center my-5 ">
          <h3 className="mb-3">My Work </h3>
          <div className="d-md-flex ">
            <Frame
              link="https://business-grippers.herokuapp.com/"
              heading="My Business Website"
            />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Project
