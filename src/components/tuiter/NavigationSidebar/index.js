import React from "react";

const NavigationSidebar = ({active = 'explore'}) => {
    return(
        <div>
                <ul class="list-group">
                    <li className="list-group-item"> <i className="fab fa-twitter"></i></li>
                    <li className={`list-group-item ${active === 'home' ? 'active' :''}`}><i className="fa fa-house-user"></i><span className="d-none d-xl-inline" > Home</span></li>
                    <li className={`list-group-item ${active === 'explore' ? 'active' :''}`}><i className="fa fa-hashtag"></i><span className="d-none d-xl-inline" > Explore</span></li>
                    <li className={`list-group-item ${active === 'notifications' ? 'active' :''}`}><i className="fa fa-bell"></i><span className="d-none d-xl-inline" > Notifications</span></li>
                    <li className={`list-group-item ${active === 'messages' ? 'active' :''}`}><i className="fa fa-envelope"></i><span className="d-none d-xl-inline" > Messages</span></li>
                    <li className={`list-group-item ${active === 'bookmarks' ? 'active' :''}`}><i className="fa fa-bookmark"></i><span className="d-none d-xl-inline" > Bookmarks</span></li>
                    <li className={`list-group-item ${active === 'lists' ? 'active' :''}`}><i className="fa fa-list"></i><span className="d-none d-xl-inline" > Lists</span></li>
                    <li className={`list-group-item ${active === 'profile' ? 'active' :''}`}><i className="fa fa-user"></i> <span className="d-none d-xl-inline" > Profile</span></li>
                    <li className={`list-group-item ${active === 'more' ? 'active' :''}`}><i className="fa fa-circle"></i> <span className="d-none d-xl-inline" > More</span></li>
                </ul>

                <button type="button" class="btn btn-primary tweet-btn">Tuit</button>
        </div>
    );
}

export default NavigationSidebar;