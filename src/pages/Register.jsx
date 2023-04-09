import React from 'react'
import './css/Register.css'

const Register = () => {
  return (
    <section className="vh-100 m-50" >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100 m-30">
          <div className="col-lg-12 col-xl-11 m-50 ">
            <div className="card text-black" >
              <div className="card-body p-md-2 registerbody">
                <div className="row justify-content-center">

                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <img className="img-thumbnail twitterlogo " src="https://th.bing.com/th/id/OIP.kSJZfUj43J7Fn7zeyIAzNwAAAA?pid=ImgDet&rs=1" alt="sampleimg" />


                  </div>


                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2   ">



                    <form className="mx-1 mx-md-4">
                      <p className=" h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" className="form-control" placeholder='Full Name' />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example3c" className="form-control" placeholder='Username' />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example4c" className="form-control" placeholder='e-mail' />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4cd" className="form-control" placeholder='Password'/>
                        </div>
                      </div>

                     
                      <div className="d-flex justify-content-left mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg">Register</button>
                      </div>
                      <div className="form-check d-flex justify-content-left mb-5">
                        <label className="form-check-label" for="form2Example3">
                          already Register? <a href="#!">Login</a>
                        </label>
                      </div>


                    </form>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Register;