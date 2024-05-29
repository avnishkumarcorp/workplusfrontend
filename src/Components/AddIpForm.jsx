import React, { useState } from "react"
import ModelInput from "./ModelInput"
import CmBtn from "./CmBtn"

const AddIpForm = () => {
  const [ipAddress, setIpAddress] = useState("")

  const submitDataFun = async () => {}

  return (
    <form>
      <ModelInput
        labelData={"IP address"}
        onChange={(e) => setIpAddress(e.target.value)}
        name="username"
        placeholder={`Enter IP Address`}
      />
      <CmBtn className="mt-2" data={`Add New IP`} />
    </form>
  )
}

export default AddIpForm
