import React, { useEffect } from "react"
import "./MainPage.scss"
import CardChart from "../Charts/CardChart"
import { fakeData } from "../data/fakeData"
import CardDesign from "../Components/CardDesign"
import { BarChart } from "recharts"
import BarChartData from "../Charts/BarChartData"
import CmGap from "../Components/CmGap"
import MdHeading from "../Components/MdHeading"
import { useDispatch, useSelector } from "react-redux"
import { mainDataFun } from "../Toolkit/MainDataSlice"

const MainPage = () => {
  const userEmail = useSelector(
    (prev) => prev?.auth?.currentUser?.data?.user?.email
  )
  console.log("user email ", userEmail)

  const dispatch = useDispatch()

  const mainData = useSelector((prev) => prev?.mainData?.mainApiData)
  console.warn(mainData)

  const { loginTime } = mainData

  useEffect(() => {
    dispatch(mainDataFun(userEmail))
  }, [])

  return (
    <CmGap>
      <MdHeading data={`My Desktime`} />
      <div className="chart-box">
        <CardDesign
          heading="Arrival Time"
          data={fakeData}
          contant={
            new Date(loginTime).getHours() +
            ":" +
            new Date(loginTime).getMinutes()
          }
        />
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
    </CmGap>
  )
}

export default MainPage
