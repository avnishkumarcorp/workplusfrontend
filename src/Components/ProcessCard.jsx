import React from "react"
import "./ProcessCard.scss"

const ProcessCard = ({ data, index }) => {
  const {
    date,
    startTime,
    activityType,
    durationMinutes,
    processName,
    processPath,
  } = data

  return (
    <>
      <div className="process-card" key={index}>
        <p className="process-name">
          <b>Process Name : </b>
          <span>{processName?.slice(0, 30)}</span>
        </p>
        <p className="process-name">
          <b>Process Date : </b>
          <span>{date}</span>
        </p>
        <p className="process-name">
          <b>Process Time : </b>
          <span>{new Date(startTime).toLocaleTimeString()}</span>
        </p>
      </div>
    </>
  )
}

export default ProcessCard
