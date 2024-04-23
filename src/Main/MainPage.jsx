import React, { useEffect } from "react"
import "./MainPage.scss"
import { fakeData } from "../data/fakeData"
import CardDesign from "../Components/CardDesign"
import BarChartData from "../Charts/BarChartData"
import CmGap from "../Components/CmGap"
import MdHeading from "../Components/MdHeading"
import { useDispatch, useSelector } from "react-redux"
import { mainDataFun } from "../Toolkit/MainDataSlice"
import getHoursMinutesDifference from "../data/dateFunctions"
import ProcessDataComp from "../Components/ProcessDataComp"

const MainPage = () => {
  const userEmail = useSelector(
    (prev) => prev?.auth?.currentUser?.data?.user?.email
  )
  console.log("user email ", userEmail)

  const dispatch = useDispatch()

  const mainData = useSelector((prev) => prev?.mainData?.mainApiData)
  console.warn(mainData)

  const { loginTime, present, dayOfWeek, loginTimeConvention } = mainData

  const data1 = new Date(Date.now())
  const data2 = new Date(loginTime)
  const { hours: userHours, minutes: userMinutes } = getHoursMinutesDifference(
    data1,
    data2
  )

  useEffect(() => {
    dispatch(mainDataFun(userEmail))
  }, [])

  return (
    <CmGap>
      <div className="align-between">
        <MdHeading data={`My Desktime`} />
      </div>
      <div className="chart-box">
        <CardDesign
          heading="Arrival Time"
          data={fakeData}
          contant={
            new Date(loginTime).getHours() +
            ":" +
            new Date(loginTime).getMinutes() +
            " " +
            loginTimeConvention
          }
        />
        <CardDesign
          heading="Left Time"
          data={fakeData}
          contant={present ? "ONLINE" : "OFFLINE"}
          className={present ? "green-cl" : "red-cl"}
        />
        <CardDesign
          heading="Desk Time"
          data={fakeData}
          contant={`${userHours}h ${userMinutes}m`}
        />
        <CardDesign
          heading="Productive Time"
          data={fakeData}
          contant="07h 01m"
        />
        <CardDesign
          heading="Day Of the Week"
          data={fakeData}
          contant={dayOfWeek}
        />
        <CardDesign heading="Productivity" data={fakeData} contant="75.30%" />
      </div>

      <div className="productive-bar">
        <h3 className="small-heading my-3">Productivity Bar</h3>
        <div className="bar-graph">
          <BarChartData />
        </div>
      </div>
        <ProcessDataComp />
    </CmGap>
  )
}

export default MainPage
