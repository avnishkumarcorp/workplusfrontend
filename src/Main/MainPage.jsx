import React, { useEffect, useState } from "react"
import "./MainPage.scss"
import { fakeData } from "../data/fakeData"
import CardDesign from "../Components/CardDesign"
import CmGap from "../Components/CmGap"
import MdHeading from "../Components/MdHeading"
import { useDispatch, useSelector } from "react-redux"
import { mainDataFun } from "../Toolkit/MainDataSlice"
import {getProductivePercentage} from "../data/dateFunctions"
import getHoursMinutesDifference from "../data/dateFunctions"
import ProcessDataComp from "../Components/ProcessDataComp"
import CmBtn from "../Components/CmBtn"

const MainPage = () => {
  const [filterDate, setFilterDate] = useState(
    new Date().toISOString().split("T")[0] )
  const [dateFilterDep, setDateFilterDep] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(mainDataFun(userDate))
  }, [dispatch, dateFilterDep])


  // const userEmail = useSelector(
  //   (prev) => prev?.auth?.currentUser?.data?.user
  // )

  const userEmail = useSelector(
    (prev) => prev?.auth?.currentUser?.data?.email
  )
  
  const mainData = useSelector((prev) => prev?.mainData?.mainApiData)

  const { loginTime, present, dayOfWeek, loginTimeConvention } = mainData

  const filterCurrentData = () => {
    setDateFilterDep((prev) => !prev)
  }

  const data1 = new Date(Date.now())
  const data2 = new Date(loginTime)
  const { hours: userHours, minutes: userMinutes } = getHoursMinutesDifference(
    data1,
    data2
  )

  const productivePercentage = getProductivePercentage(userHours, userMinutes)
 
  const userDate = {
    date: filterDate,
    email: userEmail,
  }



  return (
    <CmGap>
      <div className="align-between">
        <MdHeading data={`My Desktime`} />
        <div>
          <input
            type="date"
            className="mr-1 mb-0"
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
              ? new Date(loginTime).getHours() +
                ":" +
                new Date(loginTime).getMinutes() +
                " " +
                loginTimeConvention
              : "NULL"
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
          contant={
            loginTime !== null ? `${userHours}h ${userMinutes}m` : "NULL"
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
        <CardDesign heading="Productivity" data={fakeData} contant={`${productivePercentage ? productivePercentage : "NULL" } %`} />
      </div>

      {/* <div className="productive-bar">
        <h3 className="small-heading my-3">Productivity Bar</h3>
        <div className="bar-graph">
          <BarChartData />
        </div>
      </div> */}
      <ProcessDataComp date={filterDate} />
    </CmGap>
  )
}

export default MainPage
