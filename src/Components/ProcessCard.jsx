import React from "react"
import "./ProcessCard.scss"

const ProcessCard = ({ data, index }) => {
  const { date, activityType, durationMinutes, processName, processPath } = data

  return (
    <>
      <div className="process-card" key={index}>
        <p className="process-name">
          <b>Process Name : </b>
          <span>{processName.slice(0, 30)}</span>
        </p>
        <p className="process-name">
          <b>Process Path : </b>
          <span>{processPath.slice(0, 30)}</span>
        </p>
        <p className="process-name">
          <b>Process Date : </b>
          <span>{date}</span>
        </p>
        {/* <p className="process-name">
          <b>Duration Minutes : </b>
          <span>{durationMinutes}</span>
        </p> */}
        <p className="process-name">
          <b>Activity Type : </b>
          <span>{activityType}</span>
        </p>
      </div>
    </>
  )
}

export default ProcessCard
