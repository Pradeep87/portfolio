import React from 'react'

import Edudata from '../data/Edudata'

const Li = (props) => {
  return (
    <>
      <li>
        <h6> {props.deg}</h6>
        <ul className="InnList">
          <li>
            <p> {props.year} </p>
          </li>
          <li>
            <p>{props.board} </p>
          </li>
        </ul>
      </li>
    </>
  )
}

const NLi = (val) => {
  return (
    <>
      <Li deg={val.dgre} year={val.pasyear} board={val.board} />
    </>
  )
}

const Edu = () => {
  return (
    <>
      <h3>My Education </h3>
      <ul className="otList">{Edudata.map(NLi)}</ul>
    </>
  )
}

export default Edu
