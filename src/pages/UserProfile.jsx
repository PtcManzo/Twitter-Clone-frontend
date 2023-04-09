import React from 'react'
import './css/UserProfile.css'
import Navbar from './component/Navbar'
import EditUser from './component/EditUser'
import UpdateProfilePic from './component/UpdateProfilePic'


const UserProfile = () => {
    return (
        <div className='d-flex flex-row'>
            <Navbar/>
            <div className="card "  >

                <section className="h-70 " >
                    <div className="container py-5 h-70" style={{ width: "50vw" }}>
                        <h4 className='d-flex justify-content-left'>Profile</h4>
                        <div className="row d-flex justify-content-left align-items-center ">
                            <div className="col col-lg-9 col-xl-7 " style={{ width: "50vw" }}>
                                <div className="card">
                                    <div className="rounded-top p-1 py-1 text-white d-flex  bg-primary" style={{ height: "150px" }}>
                                        <div className="ms-1 mt-5 d-flex pt-20" style={{ width: "150px;" }}>
                                            <img className=" roundimage rounded-circle  mt-4 mb-4" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"

                                                height="90" width="120" alt="Avatar" loading="lazy"
                                            />

                                        </div>

                                    </div>
                                    <div className="p-1 text-black">
                                        <div className="d-flex flex wrap justify-content-between  text-center py-1">
                                            <div className="pt-4 col text-start align-items-start">
                                                <h5>Andy Horwitz</h5>
                                                <h6 class="text-body">
                                                    <span class="small text-muted font-weight-normal float-start">@marktawin</span><br /><br />
                                                    <span class="small text-muted font-weight-normal float-start"><i class="fa-solid fa-calendar-days"></i> Date: 12-04-2021</span>
                                                    <span class="small text-muted font-weight-normal float-start ms-5" ><i class="fa-solid fa-location-crosshairs"></i>Location: </span><br />
                                                    <span class="small text-muted font-weight-normal float-start"><i class="fa-regular fa-calendar"></i> Joined: </span><br />
                                                    <span class="small  fw-bold float-start ">2 Following </span>
                                                    <span class="small  fw-bold float-start ms-1">2 Follower </span>
                                                </h6>
                                            </div>
                                            <div>
                                               <UpdateProfilePic/>

                                            </div>
                                            <div className="px-3">
                                               <EditUser/>

                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="usertweet" >
                    <div className="border border-left border-right px-0 " style={{ width: "40em" }} >
                        <div className="p-3 border-bottom">
                            <h4 className="d-flex justify-content-center mb-0">
                                Tweets and Replies

                            </h4>
                        </div>
                        <div>

                            <div>




                                <div className="d-flex p-3 border-bottom mb-5 ">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (3).webp" className="rounded-circle"
                                        height="50" alt="Avatar" loading="lazy" />
                                    <div className="d-flex w-100 ps-3">
                                        <div>
                                            <a href="">
                                                <h6 className="text-body">

                                                    <span className="small text-muted font-weight-normal float-start">@marktawin</span>
                                                    <span className="small text-muted font-weight-normal float-start" > - </span>
                                                    <span className="small text-muted font-weight-normal float-start">12-04-2021</span>
                                                    <span><i className="fas fa-angle-down float-end"></i></span>
                                                </h6>
                                            </a>
                                            <br />
                                            <p className='text-start'>
                                                Obcaecati fugit, nobis eos odit libero voluptatibus, iste laudantium,
                                                tempore ratione ut.lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic illo quod corporis amet laudantium accusamus quidem odit autem officiis nihil, possimus vero culpa sint quasi temporibus porro aspernatur quia aut.
                                            </p>

                                            <ul className="list-unstyled d-flex justify-content-between mb-0 pe-xl-5">
                                                <li>
                                                    <i className="far fa-heart"></i><span className="small ps-2">159</span>
                                                </li>
                                                <li>

                                                    <i className="far fa-comment"></i>
                                                </li>

                                                <li>
                                                    <i className="fas fa-retweet"></i><span className="small ps-2">34</span>
                                                </li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default UserProfile