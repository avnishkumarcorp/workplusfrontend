import React, { useEffect, useState } from "react"
import MdHeading from "../Components/MdHeading"
import TableComp from "../Components/TableComp"
import { allReportsFun } from "../Toolkit/AllReportsSlice"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const SingleUserMonthlyReport = () => {
  const [filterDate, setFilterDate] = useState(
    new Date().toISOString().split("T")[0]
  )
  const [dateFilterDep, setDateFilterDep] = useState(false)

  const { useremail } = useParams()

  const userDate = {
    date: filterDate,
    email: useremail,
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allReportsFun(userDate))
  }, [dispatch, dateFilterDep])

  const { allReports, reportsError, reportsLoading } = useSelector(
    (prev) => prev?.allreports
  )

  const filterCurrentData = () => {
    setDateFilterDep((prev) => !prev)
  }

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "userName",
      headerName: "User Name",
      width: 240,
    },
    {
      field: "userEmail",
      headerName: "User Name",
      width: 240,
    },
    {
      field: "loginTime",
      headerName: "Login Time",
      width: 250,
      renderCell: (props) => (
        <p>
          {new Date(props?.row?.loginTime).toLocaleDateString()} | |{" "}
          {new Date(props?.row?.loginTime).toLocaleTimeString()}
        </p>
      ),
    },
  ]

  return (
    <>
      <div className="align-between">
        <MdHeading data={`User Monthly Report`} />
        {/* <div>
          <input
            type="date"
            className="mr-1 mb-0"
            onChange={(e) => setFilterDate(e.target.value)}
          />
          <CmBtn
            data={`Filter`}
            onClick={filterCurrentData}
          />
        </div> */}
      </div>

      <TableComp
        loading={reportsLoading}
        error={reportsError}
        data={allReports}
        col={columns}
      />
    </>
  )
}

export default SingleUserMonthlyReport
