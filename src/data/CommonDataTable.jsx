import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";

const CommonDataTable = ({rows, columns}) => {
   
      return (
        <div style={{ height: "100%", width: "100%" }}>
          <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }} />
        </div>
      )
};

export default CommonDataTable;
        