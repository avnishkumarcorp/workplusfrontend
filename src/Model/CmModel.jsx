import React from "react"
import "./CmModel.scss"
import { useSelector } from "react-redux"

const CmModel = ({ children,  data, modelhead, modelId }) => {
  const userRoles = useSelector(
    (prev) => prev?.role?.allRoles
  )

  const { createNewUser: newUser, newuserLoading, newUserError } = useSelector(
    (prev) => prev?.alluser
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
        data-target={`#${modelId}`}
      >
        {data}
      </button>

      <div
        className={`modal fade ${newUser ? 'd-none' : ""}`}
        id={`${modelId}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden={`${newUser ? 'true' : 'false'}`}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {modelhead}
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
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CmModel
