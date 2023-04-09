import React from 'react'
import Tweet from './component/Tweet'
import Navbar from './component/Navbar'

const HomePage = () => {
  return (
    <div className='d-flex flex-row'>
      <Navbar/>
    <div className="card" >
  <div className="border border-left border-right px-0 " style={{width: "50em"}} >
    <div className="p-3 border-bottom">
      <h4 className="d-flex align-items-center mb-0">
        Home <Tweet/>
      </h4>
    </div>
    <div>
      
      <div>
        <div className="d-flex p-3 border-bottom mb-5 ">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (3).webp" className="rounded-circle"
            height="50" alt="Avatar" loading="lazy" />
          <div className="d-flex w-100 ps-3">
            <div>
              <a   href="">
                <h6 className="text-body">
                  
                  <span className="small text-muted font-weight-normal float-start">@marktawin</span>
                  <span className="small text-muted font-weight-normal float-start" > - </span>
                  <span className="small text-muted font-weight-normal float-start">12-04-2021</span>
                  <span><i className="fas fa-angle-down float-end"></i></span>
                </h6>
              </a>
              <br />
              <p >
                Obcaecati fugit, nobis eos odit libero voluptatibus, iste laudantium,
                tempore ratione ut.lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic illo quod corporis amet laudantium accusamus quidem odit autem officiis nihil, possimus vero culpa sint quasi temporibus porro aspernatur quia aut.
              </p>
              <div className="ratio ratio-16x9 mb-3">
                <iframe src="https://www.youtube.com/embed/vlDzYIIOYmM" title="YouTube video"
                  allowfullscreen></iframe>
              </div>
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
  )
}

export default HomePage





// import React from 'react';

// const HomePage = () => {
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-2 p-0 bg-light">
//             <div className="d-flex flex-column flex-shrink-0 p-3">
//               <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
//                 <svg className="bi me-2" width="40" height="32">
//                   <use xlinkHref="#bootstrap"></use>
//                 </svg>
//                 <span className="fs-4">Twitter</span>
//               </a>
//               <hr />
//               <ul className="nav nav-pills flex-column mb-auto">
//                 <li className="nav-item">
//                   <a href="/" className="nav-link active">
//                     <svg className="bi me-2" width="16" height="16">
//                       <use xlinkHref="#home"></use>
//                     </svg>
//                     Home
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="/" className="nav-link">
//                     <svg className="bi me-2" width="16" height="16">
//                       <use xlinkHref="#people-circle"></use>
//                     </svg>
//                     Explore
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="/" className="nav-link">
//                     <svg className="bi me-2" width="16" height="16">
//                       <use xlinkHref="#bell"></use>
//                     </svg>
//                     Notifications
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="/" className="nav-link">
//                     <svg className="bi me-2" width="16" height="16">
//                       <use xlinkHref="#envelope"></use>
//                     </svg>
//                     Messages
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="/" className="nav-link">
//                     <svg className="bi me-2" width="16" height="16">
//                       <use xlinkHref="#bookmark"></use>
//                     </svg>
//                     Bookmarks
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="/" className="nav-link">
//                     <svg className="bi me-2" width="16" height="16">
//                       <use xlinkHref="#file-earmark-person"></use>
//                     </svg>
//                     Lists
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="/" className="nav-link">
//                     <svg className="bi me-2" width="16" height="16">
//                       <use xlinkHref="#person"></use>
//                     </svg>
//                     Profile
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="/" className="nav-link">
//                     <svg className="bi me-2" width="16" height="16">
//                       <use xlinkHref="#gear"></use>
//                     </svg>
//                     Settings
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="/" className="nav-link">
//                     <svg className="bi me-2" width="16" height="16">
//                       <use xlinkHref="#box-arrow-left"></use>
//                     </svg>
//                     Logout
//                   </a>
//                 </li>
//               </ul>
//               <hr />
//               <div className="dropdown">
//                 <a href="/" className="d-flex align-items-center link-dark text-decoration-none"></a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default HomePage
