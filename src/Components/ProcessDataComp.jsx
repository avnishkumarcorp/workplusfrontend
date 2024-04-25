import React, { useEffect } from "react"
import "./ProcessDataComp.scss"
import { processData } from "../data/fakeData"
import ProcessCard from "./ProcessCard"
import { allProcessFun } from "../Toolkit/AllProcessSlice"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const ProcessDataComp = ({ date, pro }) => {
  const dispatch = useDispatch()
  const { useremail } = useParams()

  const { email: userEmail } = useSelector(
    (prev) => prev?.auth?.currentUser?.data?.user
  )

  const processdata = {
    date: date,
    email: userEmail,
  }

  const processdatabyUser = {
    date: date,
    email: useremail,
  }

  const alldata = useSelector((prev) => prev?.allprocess?.allprocess)

  useEffect(() => {
    dispatch(allProcessFun(pro ? processdatabyUser : processdata))
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
