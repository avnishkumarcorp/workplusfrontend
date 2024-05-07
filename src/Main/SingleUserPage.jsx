import React, { useEffect, useState } from "react"
import "./MainPage.scss"
import { fakeData } from "../data/fakeData"
import CardDesign from "../Components/CardDesign"
import CmGap from "../Components/CmGap"
import MdHeading from "../Components/MdHeading"
import { useDispatch, useSelector } from "react-redux"
import { mainDataAllFun } from "../Toolkit/MainDataSlice"
import getHoursMinutesDifference from "../data/dateFunctions"
import { getProductivePercentage } from "../data/dateFunctions"
import ProcessDataComp from "../Components/ProcessDataComp"
import CmBtn from "../Components/CmBtn"
import { getCurrentUserFun } from "../Toolkit/AllUsersSlice"
import { useParams } from "react-router-dom"

const SingleUserPage = () => {
  const [filterDate, setFilterDate] = useState(
    new Date().toISOString().split("T")[0]
  )
  const [singlePro, setSinglePro] = useState(true)
  const [dateFilterDep, setDateFilterDep] = useState(false)

  const userEmail = useSelector(
    (prev) => prev?.auth?.currentUser?.data?.user?.email
  )

  const userData = useSelector((prev) => prev?.auth?.currentUser?.data?.user)

  const { useremail } = useParams()

  const dispatch = useDispatch()

  const mainData = useSelector((prev) => prev?.mainData?.mainAllApiData)

  const changeUser = useSelector((prev) => prev?.alluser?.singleUser?.data)

  const { loginTime, present, dayOfWeek, loginTimeConvention } = mainData

  const filterCurrentData = () => {
    setDateFilterDep((prev) => !prev)
  }

  console.log(filterDate);

  const data1 = new Date(Date.now())
  const data2 = new Date(loginTime)
  const { hours: userHours, minutes: userMinutes } = getHoursMinutesDifference(
    data1,
    data2
  )

  const productivePercentage = getProductivePercentage(userHours, userMinutes)

  const userDate = {
    date: filterDate,
    email: useremail,
  }

  useEffect(() => {
    dispatch(getCurrentUserFun(useremail))
  }, [dispatch, useremail])

  useEffect(() => {
    dispatch(mainDataAllFun(userDate))
  }, [dispatch, dateFilterDep])

  return (
    <CmGap>
      <div className="align-between">
        <MdHeading data={`Single User`} />
        <div>
          <input
            type="date"
            className="mr-1 mb-0"
            onChange={(e) => setFilterDate(e.target.value)}
          />
          <CmBtn data={`Filter`} onClick={filterCurrentData} />
        </div>
      </div>

      <div className="user-info">
        <p>
          <b>User Name:</b> {changeUser?.username}
        </p>
        <p>
          <b>User Email:</b> {changeUser?.email}
        </p>
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
        <CardDesign
          heading="Productivity"
          data={fakeData}
          contant={`${productivePercentage ? productivePercentage : "NULL"} %`}
        />
      </div>
      <ProcessDataComp pro={singlePro} date={filterDate}  />
    </CmGap>
  )
}

export default SingleUserPage
