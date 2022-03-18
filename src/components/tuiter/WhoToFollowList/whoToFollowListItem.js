import React from "react";

const WhoToFollowListItem = ({who = {"avatarIcon": "null", "userName":"Java", "handle":"Java"}}) => {

    console.log(who);
    return (
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-3 mt-auto mb-auto">
                                <img className="rounded-circle" width="72px" height="auto" src={who.avatarIcon} />
                            </div>
                            <div className="col-5">
                                <p className="fw-bold d-inline">{who.userName}</p> <i className="fa fa-check-circle"/>
                                <p className="text-secondary mb-0">@{who.handle}</p>
                            </div>
                            <div className="col-4 mt-auto mb-auto p-0">
                                <button className="btn btn-primary rounded-pill">Follow</button>
                            </div>
                        </div>
                    </li>
    )
};

export default WhoToFollowListItem;