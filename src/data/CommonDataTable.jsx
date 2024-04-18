import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const CommonDataTable = ({rows, columns}) => {
   
      return (
        <div style={{ height: "100%", width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      )
};

export default CommonDataTable;
        