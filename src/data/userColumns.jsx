export const userCol = [
  { field: "id", headerName: "ID", width: 60 },
  { field: "username", headerName: "User Name", width: 200 },
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
