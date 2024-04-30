import React from "react";
import MdHeading from "../Components/MdHeading";
import CmBtn from "../Components/CmBtn";
import TableComp from "../Components/TableComp";

const SingleUserMonthlyReport = () => {
  return (
    <>
    <div className="align-between">
    <MdHeading data={`User Monthly Report`} />
    <div>
      <input
        type="date"
        className="mr-1 mb-0"
        // onChange={(e) => setFilterDate(e.target.value)}
      />
      <CmBtn data={`Filter`} 
    //   onClick={filterCurrentData}
       />
    </div>
  </div>

  {/* <TableComp
        loading={userLoading}
        error={userError}
        data={allUsers}
        col={columns}
      /> */}
  </>
  );
};

export default SingleUserMonthlyReport;
