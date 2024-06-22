import React from 'react'

const Sidebar = () => {
  return (
    <div className="nav-side-menu">
    <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
  
        <div className="menu-list">
  
            <ul id="menu-content" className="menu-content collapse out">
                <li>
                  <a href="#">
                  <i className="fa fa-dashboard fa-lg"></i> Dashboard
                  </a>
                </li>
               
                 <li>
                  <a href="#">
                  <i className="fa fa-user fa-lg"></i> Profile
                  </a>
                  </li>

                 <li>
                  <a href="#">
                  <i className="fa fa-users fa-lg"></i> Users
                  </a>
                </li>
            </ul>
     </div>
</div>
  )
}

export default Sidebar
