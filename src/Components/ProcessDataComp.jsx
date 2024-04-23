import React, { useEffect } from "react"
import "./ProcessDataComp.scss"
import { processData } from "../data/fakeData"
import ProcessCard from "./ProcessCard"
import { allProcessFun } from "../Toolkit/AllProcessSlice"
import { useDispatch, useSelector } from "react-redux"

const ProcessDataComp = () => {
  const dispatch = useDispatch()

  const { email: userEmail } = useSelector(
    (prev) => prev?.auth?.currentUser?.data?.user
  )
  //   {date, activityType, durationMinutes, processName, processPath}

  const alldata = useSelector((prev) => prev?.allprocess?.allprocess)

 
  useEffect(() => {
    dispatch(allProcessFun(userEmail))
  }, [dispatch])

  return (
    <div className="process-box">
      {alldata?.map((data, index) => (
        <ProcessCard data={data} index={index} />
      ))}
    </div>
  )
}

export default ProcessDataComp
