import React from 'react'

const UpdateProfilePic = () => {
  return (
    <>
    <button type="button" className=" btn btn-outline-primary" data-mdb-ripple-color="dark" data-bs-toggle="modal" 
    data-bs-target="#UpdateProfilePic"style={{ zindex: "1" }}>
  Upload Profile Photo
</button>



<div className="modal fade" id="UpdateProfilePic" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Edit Profile</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
         <div class="mb-3">
            <div class="alert alert-primary d-flex align-items-center" role="alert">
             
                <div className='small'>
                 Note: The image should be square in shape
                </div>
            </div>
            <input class="form-control" type="file" id="formFile"/>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save Profile Pic</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default UpdateProfilePic