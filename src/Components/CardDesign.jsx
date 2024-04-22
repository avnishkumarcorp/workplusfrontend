import React from "react"
import "./CardDesign.scss"
import CardChart from "../Charts/CardChart"
import { fakeData } from "../data/fakeData"

const CardDesign = ({ heading, data, contant, className='' }) => {
  return (
    <div className="card-design">
      <h2 className="card-heading">{heading}</h2>
      <h3 className={`card-content ${className}`}>{contant}</h3>
      <div className="sm-box">
        <CardChart data={data} />
      </div>
    </div>
  )
}

export default CardDesign
