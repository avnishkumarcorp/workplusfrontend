import React from "react"
import "./InputComponent.scss"

const InputComponent = ({ icon, type, placeholder, ...props }) => {
  return (
    <div className="input-field">
      {icon}
      <input
        className="my-input"
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}

export default InputComponent
