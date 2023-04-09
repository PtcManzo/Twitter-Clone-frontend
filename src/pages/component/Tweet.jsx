import React from 'react'

const Tweet = () => {
  return (
    <>
    {/* Button trigger modal  */}
<button type="button" className="far fa-xs  ms-auto float-right btn btn-primary btn-rounded" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Tweet
</button>

{/* // Modal  */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Tweet your reply</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Reply</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Tweet