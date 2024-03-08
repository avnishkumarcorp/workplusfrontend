import React from "react"
import "./MainPage.scss"
import CardChart from "../Charts/CardChart"
import { fakeData } from "../data/fakeData"
import CardDesign from "../Components/CardDesign"
import { BarChart } from "recharts"
import BarChartData from "../Charts/BarChartData"

const MainPage = () => {
  return (
    <div className="common-gap">
      <h1 className="small-heading">My Desktime</h1>
      <div className="chart-box">
        <CardDesign heading="Arrival Time" data={fakeData} contant="09:01" />
        <CardDesign heading="Left Time" data={fakeData} contant="ONLINE" />
        <CardDesign heading="Desk Time" data={fakeData} contant="07h 01m" />
        <CardDesign
          heading="Productive Time"
          data={fakeData}
          contant="07h 01m"
        />
        <CardDesign heading="Time at Work" data={fakeData} contant="05h 01m" />
        <CardDesign heading="Productivity" data={fakeData} contant="75.30%" />
      </div>

      <div className="productive-bar">
        <h3 className="small-heading my-3">Productivity Bar</h3>
        <div className="bar-graph">
          <BarChartData />
        </div>
      </div>
    </div>
  )
}

export default MainPage
