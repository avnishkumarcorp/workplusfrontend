import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import React from "react"

const CommonDataTable = ({ rows, columns, getRowId }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </div>
  )
}

export default CommonDataTable
