import React, { useEffect, useState } from "react"
import MdHeading from "../Components/MdHeading"
import TableComp from "../Components/TableComp"
import { allReportsFun } from "../Toolkit/AllReportsSlice"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import CmBtn from "../Components/CmBtn"

const SingleUserMonthlyReport = () => {
  const [filterDate, setFilterDate] = useState("")
  const [year, setYear] = useState("")
  const [month, setMonth] = useState("")

  let data

  useEffect(() => {
    data = filterDate?.split("-")
    console.log(data)
    setYear(data[0])
    setMonth(data[1])
  }, [filterDate])

  console.log("year Months", filterDate)
  const [dateFilterDep, setDateFilterDep] = useState(false)

  const { useremail } = useParams()

  const userDate = {
    year: filterDate.length === 0 ? new Date().getFullYear() : year,
    month: filterDate.length === 0 ? new Date().getMonth() + 1 : month,
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
        <div>
          <input
            type="month"
            id="start"
            name="start"
            className="mr-1 mb-0"
            min="2024-03"
            value={filterDate || `2024-01`}
            onChange={(e) => setFilterDate(e.target.value)}
          />
          <CmBtn data={`Filter`} onClick={filterCurrentData} />
        </div>
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
