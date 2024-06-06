import React, { useEffect, useState } from "react"
import CmGap from "../Components/CmGap"
import MdHeading from "../Components/MdHeading"
import { useDispatch, useSelector } from "react-redux"
import { allGapFun } from "../Toolkit/AllGapSlice"
import TableComp from "../Components/TableComp"
import { useParams } from "react-router-dom"

const GapPage = () => {
  const [filterDate, setFilterDate] = useState("")

  console.log(filterDate)

  const {useremail} = useParams();

  const { email } = useSelector((prev) => prev?.auth?.currentUser?.data)

  console.log(email)

  const dispatch = useDispatch()

  const gapParam = {
    userMailId: useremail ? useremail : email,
    date: filterDate,
  }

  useEffect(() => {
    dispatch(allGapFun(gapParam))
  }, [dispatch, filterDate])

  const { allGapData, gapLoading, gapError } = useSelector((prev) => prev?.gap)

  const columns = [
    {
      field: "index",
      headerName: "ID",
      width: 80,
      renderCell: (props) => (
        <p>{props.row.index + 1}</p> // Adding 1 to make index 1-based
      ),
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
    },
    {
      field: "gapStartTime",
      headerName: "Gap Start Time",
      width: 150,
      renderCell: (props) => (
        <p>{new Date(props?.row?.gapStartTime).toLocaleTimeString()}</p>
      ),
    },
    {
      field: "gapEndTime",
      headerName: "Gap End Time",
      width: 150,
      renderCell: (props) => (
        <p>{new Date(props?.row?.gapEndTime).toLocaleTimeString()}</p>
      ),
    },
    {
      field: "gapTime",
      headerName: "Gap Time",
      width: 150,
    },
  ]

  const gapReport = allGapData.map((report, index) => ({
    ...report,
    index,
  }))

  console.log(gapReport)

  return (
    <CmGap>
      <div className="align-between">
        <MdHeading data={`Daily Gap Report`} />
        <div>
          <input
            type="date"
            className="mr-1 mb-0"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>
      </div>

      <TableComp
        loading={gapLoading}
        error={gapError}
        data={gapReport}
        col={columns}
      />
    </CmGap>
  )
}

export default GapPage
