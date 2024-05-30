import React, { useEffect } from "react"
import CmGap from "../Components/CmGap"
import MdHeading from "../Components/MdHeading"
import { allUsersFun, deleteUserFun } from "../Toolkit/AllUsersSlice"
import { useDispatch, useSelector } from "react-redux"
import TableComp from "../Components/TableComp"
import CmModel from "../Model/CmModel"
import CreateUserModel from "../Model/CreateUserModel"
import { Link, useLocation } from "react-router-dom"

const AllUsers = () => {
  const dispatch = useDispatch()

  const { allUsers, userLoading, userError } = useSelector(
    (prev) => prev?.alluser
  )

  const { pathname } = useLocation()

  const { deleteUser, deluserLoading, delUserError } = useSelector(
    (prev) => prev?.alluser
  )

  useEffect(() => {
    dispatch(allUsersFun())
  }, [dispatch, deleteUser])

  const deleteExistUserFun = async (id) => {
    if (window.confirm("Are You Want to Sure ?")) {
      const delUser = await dispatch(deleteUserFun({ id: id }))
    }
  }

  // const editExistUserFun = async () => {
  //   console.log("Edit User")
  // }

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
      width: 150,
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
    // {
    //   field: "Edit",
    //   headerName: "Edit",
    //   width: 90,
    //   renderCell: (props) => (
    //     <p onClick={() => editExistUserFun(props?.row?.id)}>
    //       <i class="fa-solid fa-pencil"></i>
    //     </p>
    //   ),
    // },
    {
      field: "Delete",
      headerName: "Delete",
      width: 90,
      renderCell: (props) => (
        <p onClick={() => deleteExistUserFun(props?.row?.id)}>
          <i className="fa-solid fa-trash"></i>
        </p>
      ),
    },
  ]

  return (
    <CmGap>
      <div className="align-between">
        <MdHeading
          data={
            pathname === "/workplus/users"
              ? `All Users Report`
              : "All Users Screenshot"
          }
        />
        <CmModel
          data={`Create New user`}
          modelhead={"create User"}
          modelId={`createUserModel`}
        >
          <CreateUserModel />
        </CmModel>
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
