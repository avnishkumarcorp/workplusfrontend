import React, { useEffect, useState } from "react"
import "./MainPage.scss"
import { fakeData } from "../data/fakeData"
import CardDesign from "../Components/CardDesign"
import CmGap from "../Components/CmGap"
import MdHeading from "../Components/MdHeading"
import { useDispatch, useSelector } from "react-redux"
import { mainDataFun } from "../Toolkit/MainDataSlice"
import { getProductivePercentage } from "../data/dateFunctions"
import getHoursMinutesDifference from "../data/dateFunctions"
import ProcessDataComp from "../Components/ProcessDataComp"
import CmBtn from "../Components/CmBtn"

const MainPage = () => {
  const [filterDate, setFilterDate] = useState(
    new Date().toISOString().split("T")[0]
  )
  const [dateFilterDep, setDateFilterDep] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(mainDataFun(userDate))
  }, [dispatch, dateFilterDep])

  const userEmail = useSelector((prev) => prev?.auth?.currentUser?.data?.email)

  const mainData = useSelector((prev) => prev?.mainData?.mainApiData)
  console.log(mainData)

  const { loginTime, present, dayOfWeek, loginTimeConvention, logoutTimeConvention, logoutTime } =
    mainData

  const filterCurrentData = () => {
    setDateFilterDep((prev) => !prev)
  }

  const data1 = new Date(Date.now())
  const data2 = new Date(loginTime)
  const { hours: userHours, minutes: userMinutes } = getHoursMinutesDifference(
    data1,
    data2
  )

  const data3 = new Date(logoutTime)
  const data4 = new Date(loginTime)
  const { hours: userHoursOut, minutes: userMinutesOut } = getHoursMinutesDifference(
    data3,
    data4
  )

  const productivePercentage = getProductivePercentage(userHours, userMinutes)

  const userDate = {
    date: filterDate,
    email: userEmail,
  }

  return (
    <CmGap>
      <div className="align-between">
        <MdHeading data={`My Workplus Time`} />
        <div>
          <input
            type="date"
            className="mr-1 mb-0"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
          <CmBtn data={`Filter`} onClick={filterCurrentData} />
        </div>
      </div>
      <div className="chart-box">
        <CardDesign
          heading="Arrival Time"
          data={fakeData}
          contant={
            loginTime !== null
              ? new Date(loginTime).getHours().toString().padStart(2, '0') +
                ":" +
                new Date(loginTime).getMinutes().toString().padStart(2, '0') +
                " " +
                loginTimeConvention
              : "NULL"
          }
        />
        <CardDesign
          heading="Left Time"
          data={fakeData}
          contant={
            logoutTime !== null
              ? new Date(logoutTime).getHours().toString().padStart(2, '0') +
                ":" +
                new Date(logoutTime).getMinutes().toString().padStart(2, '0') +
                " " + logoutTimeConvention
              : "NULL"
          }
        />
        <CardDesign
          heading="Desk Time"
          data={fakeData}
          contant={
            loginTime !== null ? `${userHours}h ${userMinutes}m` : "NULL"
          }
        />
         <CardDesign
          heading="Today Report Time"
          data={fakeData}
          contant={
            loginTime !== null ? `${userHoursOut}h ${userMinutesOut}m` : "NULL"
          }
        />
        <CardDesign
          heading="Productive Time"
          data={fakeData}
          contant={present ? "PRESENT" : "ABSENT"}
          className={present ? "green-cl" : "red-cl"}
        />
        <CardDesign
          heading="Day Of the Week"
          data={fakeData}
          contant={dayOfWeek !== null ? dayOfWeek : "NULL"}
        />
        <CardDesign
          heading="Productivity"
          data={fakeData}
          contant={`${productivePercentage ? productivePercentage : "NULL"} %`}
        />
      </div>

      <ProcessDataComp date={filterDate} />
    </CmGap>
  )
}

export default MainPage
