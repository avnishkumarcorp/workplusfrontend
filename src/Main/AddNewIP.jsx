import React from "react"
import CmGap from "../Components/CmGap"
import AddIpForm from "../Components/AddIpForm"
import MdHeading from "../Components/MdHeading"

const AddNewIP = () => {
  return (
    <CmGap>
      <MdHeading data={"All IP Address"} />
      <AddIpForm />
    </CmGap>
  )
}

export default AddNewIP
