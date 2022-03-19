import React from "react";
import PostSummaryList from "../PostSummaryList/postSummaryList";

const ExploreComponent = () => {
    return (
            <div className="row">
                       <div className="wd-search-section col-12 row ms-1 me-1">
                    <div className="col-11 border rounded-pill bg-color-white">
                        <i className="fa fa-search d-inline pe-2"/>
                        <input className="form-control d-inline" style={{width: "90%",  border: "none", boxShadow: "none" }} type="text" name="" placeholder="Search Tuiter"/>
                    </div>
                    <div className="col-1 "> <a href="/tuiter">
                        <i className="fa fa-cog fa-2x position-relative top-20 start-70 pt-1 align-middle" /> </a>
                    </div>
                </div>

           <ul className="row nav mb-2 nav-tabs">
                <ul className="nav nav-tabs mt-2 me-1 ms-1">
                    <li className="nav-item">
                        <a className="nav-link active" href="/tuiter">For You</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/tuiter">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/tuiter">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/tuiter">Sports</a>
                    </li>
                    <li className="d-none d-lg-block  nav-item">
                        <a className="nav-link" href="/tuiter">Entertainment</a>
                    </li>


                </ul>
           </ul>
            <div className="row mt-1 position-relative">
                <h2 className="position-absolute bottom-0 d-inline mb-2 ms-3 float-end text-white">SpaceX's Starship </h2>
                <img className="img-fluid ms-1" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" width="100%" alt="Starship Day1"/>
            </div>

            <div className="mt-2">
              {<PostSummaryList />}
            </div>

           </div>

    );
}

export default ExploreComponent;