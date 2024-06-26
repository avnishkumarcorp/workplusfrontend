import React, { useEffect } from "react"
import "./ProcessDataComp.scss"
import ProcessCard from "./ProcessCard"
import { allProcessFun } from "../Toolkit/AllProcessSlice"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import TableScalaton from "./TableScalaton"
import NoRecordAdded from "./NoRecordAdded"

const ProcessDataComp = ({ date, pro, dateFilterDep }) => {
  const dispatch = useDispatch()
  const { useremail } = useParams()

  const userEmail = useSelector((prev) => prev?.auth?.currentUser?.data?.email)

  const processdata = {
    date: date,
    email: userEmail,
  }

  const processdatabyUser = {
    date: date,
    email: useremail,
  }

  const { allprocess, processLoading, processError } = useSelector(
    (prev) => prev?.allprocess
  )

  useEffect(() => {
    dispatch(allProcessFun(pro ? processdatabyUser : processdata))
  }, [dispatch, dateFilterDep])

  return (
    <div className="process-box">
      {processLoading && <TableScalaton />}
      {processError && <NoRecordAdded />}
      {allprocess.length === 0 && <NoRecordAdded />}
      {allprocess &&
        !processLoading &&
        !processError &&
        allprocess?.map((data, index) => (
          <ProcessCard data={data} key={index} />
        ))}
    </div>
  )
}

export default ProcessDataComp
