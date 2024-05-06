import React, { useEffect } from "react"
import MdHeading from "../Components/MdHeading"
import TableComp from "../Components/TableComp"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { allUsersFun } from "../Toolkit/AllUsersSlice"

const ReportsPage = () => {
  const { allUsers, userLoading, userError } = useSelector(
    (prev) => prev?.alluser
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allUsersFun())
  }, [dispatch])

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "username",
      headerName: "User Name",
      width: 200,
      renderCell: (props) => (
        <Link to={`${props?.row?.email}`}>{props.row.username}</Link>
      ),
    },
    { field: "email", headerName: "Email ID", width: 300 },
    {
      field: "createdAt",
      headerName: "Created Date",
      width: 200,
      renderCell: (props) => (
        <p>{new Date(props?.row?.createdAt).toLocaleDateString()}</p>
      ),
    },

    {
      field: "role",
      headerName: "Role",
      width: 100,
      renderCell: (props) => <p>{props?.row?.roles[0]}</p>,
    },
  ]

  return (
    <>
      <MdHeading data={`All Users for Reports`} />

      <TableComp
        loading={userLoading}
        error={userError}
        data={allUsers}
        col={columns}
      />
    </>
  )
}

export default ReportsPage
