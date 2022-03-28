import React from "react";
import PostSummaryList from "../PostSummaryList/postSummaryList";
import SearchBar from "../components/SearchBar";

const ExploreComponent = () => {
    return (
            <div className="row">
                <SearchBar />


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