import React from "react";

const CmBtn = ({className='', data, props}) => {
  return <button className={`cm-btn-one ${className}`} {...props}>{data}</button>;
};

export default CmBtn;
