import React from "react"

const ModelInput = React.forwardRef(
  ({ className = "", props, placeholder, type, name, labelData }, ref) => {
    return (
      <div className="py-1">
        {labelData && <label className="model-label">{labelData}</label> }
        <input className={`input-model ${className}`} type="text" {...props} placeholder={placeholder} name={name} ref={ref} />
      </div>
    )
  }
)

export default ModelInput
