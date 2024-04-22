import React from "react"
import CmBtn from "../Components/CmBtn"
import ModelInput from "../Components/ModelInput"
import "./CmModel.scss"
import ModelDropDown from "../Components/ModelDropDown"
import { useSelector } from "react-redux"

const CmModel = ({ data }) => {

    const userRoles = useSelector(
        (prev) => prev?.role?.allRoles
      )

      console.log("roles", userRoles);

  const roles = [
    { id: 1, name: "ADMIN" },
    { id: 2, name: "USER" },
  ]
  return (
    <>
      <button
        type="button"
        className="cm-btn-one"
        data-toggle="modal"
        data-target="#createUser"
      >
        {data}
      </button>

      <div
        className="modal fade"
        id="createUser"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create New User
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ModelInput
                labelData={"User Name"}
                placeholder={`Enter User Name`}
              />
              <ModelInput
                labelData={"Email ID"}
                placeholder={`Enter User Email`}
              />
              <ModelDropDown
                labelData={`Select Role`}
                val={userRoles?.map((role) => ({
                  value: role.id,
                  label: role.roleName,
                }))}
              />
              <div className="model-btn-box">
                <CmBtn data={`Create User`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CmModel
