import React from 'react'
import "./createInput.css"

const CreateInput = ({label="", type = "text", onChange, placeholder, i, onFocus, value}) => {
  return (
    <div className='input-group'>
      {label && <label>{label}</label>}
      <input type={type} onChange={onChange} placeholder={placeholder} value={value} onFocus={onFocus}/>
      {i}
    </div>
  )
}

export default CreateInput