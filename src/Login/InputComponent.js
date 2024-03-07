import React from "react"
import "./InputComponent.scss"

const InputComponent = ({ icon, type, placeholder }) => {
  return (
    <div className="input-field">
      {icon}
      <input className="my-input" type={type} placeholder={placeholder} />
    </div>
  )
}

export default InputComponent
