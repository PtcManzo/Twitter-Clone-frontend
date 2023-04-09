import React from 'react'

const EditUser = () => {
  return (
    <>
     
    <button type="button" className=" btn btn-outline-dark" data-mdb-ripple-color="dark" data-bs-toggle="modal" data-bs-target="#EditUser"style={{ zindex: "1" }}>
  Edit
</button>

{/* // Modal  */}
<div className="modal fade" id="EditUser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Edit Profile</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div class="">
            <label for="Name" class=" float-start  small">Name</label>
            <input type="text" class="form-control small" id="Name" placeholder="John"/>
            <label for="Location" class=" float-start small">Location</label>
            <input type="text" class="form-control small" id="Location" placeholder="Meghalaya,India"/>
            <label for="DateofBirth" class="float-start small">Date of Birth</label>
            <input type='date' class="form-control small" id="DateofBirth" placeholder="12/04/1996"/>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Send</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default EditUser