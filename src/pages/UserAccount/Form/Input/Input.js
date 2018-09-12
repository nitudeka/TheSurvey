import React from 'react';
import './Input.css';

const Input = (props) => {
  let style = {};
  if (props.focused) {
    if (props.valid) {
      style = {borderBottom: '2px solid #75a902'}
    } else {
      style = {borderBottom: '2px solid #ff3547'}
    }
  }
  
  return (
    <div className='input-container'>
      <input style={style} className='form-input' type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
      <label className='input-label'>{props.label}</label>
    </div>
  )
}

export default Input;
