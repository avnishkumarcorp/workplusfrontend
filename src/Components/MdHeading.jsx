import React from "react";

const MdHeading = ({className='', data}) => {
  return <h2 className={`small-heading ${className}`}>{data}</h2>;
};

export default MdHeading;
