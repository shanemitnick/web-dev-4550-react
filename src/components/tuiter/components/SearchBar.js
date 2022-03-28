import React from "react";

const SearchBar = () => {
    return (
        <div className="wd-search-section col-12 row ms-1 me-1">
            <div className="col-11 border rounded-pill bg-color-white">
                <i className="fa fa-search d-inline pe-2"/>
                <input className="form-control d-inline" style={{width: "90%",  border: "none", boxShadow: "none" }} type="text" name="" placeholder="Search Tuiter"/>
            </div>
            <div className="col-1 "> <a href="/tuiter">
                <i className="fa fa-cog fa-2x position-relative top-20 start-70 pt-1 align-middle" /> </a>
            </div>
        </div>
    )
}

export default SearchBar;