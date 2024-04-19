import React, { useEffect } from "react"
import CmGap from "../Components/CmGap"
import MdHeading from "../Components/MdHeading"
import { allUsersFun } from "../Toolkit/AllUsersSlice"
import { useDispatch, useSelector } from "react-redux"
import TableComp from "../Components/TableComp"
import CmBtn from "../Components/CmBtn"

const AllUsers = () => {
  const dispatch = useDispatch()

  const { allUsers, userLoading, userError } = useSelector(
    (prev) => prev?.alluser
  )

  console.log(allUsers, userLoading, userError)

  useEffect(() => {
    dispatch(allUsersFun())
  }, [dispatch])


  const deleteUserFun =  () => {
    if(window.confirm("Are You Want to Sure ?")){
        console.log("User Delete SUccesfully");
    }
  } 



  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "username", headerName: "User Name", width: 350 },
    { field: "email", headerName: "Email ID", width: 350 },
    {
      field: "Delete",
      headerName: "Delete",
      width: 350,
      renderCell: () => <p onClick={deleteUserFun}><i class="fa-solid fa-trash"></i></p>,
    },
  ]

  return (
    <CmGap>
      <div className="align-between">
      <MdHeading data={`All Users`} />
      <CmBtn data={`Create New user`}  />
      </div>
      <TableComp
        loading={userLoading}
        error={userError}
        data={allUsers}
        col={columns}
      />
    </CmGap>
  )
}

export default AllUsers
