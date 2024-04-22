import React from "react"

const ModelInput = React.forwardRef(
  ({ className = "",  placeholder, labelData, ...props}, ref) => {
    return (
      <div className="py-1">
        {labelData && <label className="model-label">{labelData}</label>}
        <input
          className={`input-model ${className}`}
          type="text"
          {...props}
          placeholder={placeholder}
          ref={ref}
        />
      </div>
    )
  }
)

export default ModelInput
