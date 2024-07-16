import React from 'react'
import { GoArrowRight } from 'react-icons/go';

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick} className={props.class} style={{ backgroundColor: props.backgroundColor }}>{props.btn}{props.icons === null ? null : props.icons}</button>
    </>
  )
}

export default Button;
