import React from "react"
import CommonDataTable from "../data/CommonDataTable"
import TableScalaton from "./TableScalaton"
import SomethingWrong from "./SomethingWrong"

const TableComp = ({ loading, error, data, col, className = "" }) => {
  return (
    <div className={`py-2 ${className}`}>
      {loading && <TableScalaton />}
      {error && <SomethingWrong />}
      {data && !loading && !error && (
        <CommonDataTable rows={data} columns={col} />
      )}
    </div>
  )
}

export default TableComp
