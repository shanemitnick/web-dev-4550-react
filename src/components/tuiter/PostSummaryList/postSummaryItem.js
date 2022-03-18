import React from "react";

const PostSummaryItem = (post) => {
    post = post.post;
    return(
        <>
            <div className="row border pt-1 me-1 ms-1">
                <div className="col-9">
                    <p className="text-secondary mb-0">{post.topic}</p>
                    <p className="fw-bold d-inline"> {post.userName} <i className="fa fa-check-circle"/></p> <p
                    className="text-secondary d-inline"> - 2h</p>

                    <p className="fw-bold mb-0"> {post.title}</p>
                    <p className="text-secondary mt-0 mb-0">{post.tweets}</p>

                </div>

                <div className="col-3">
                    <img width="96px" className="float-end rounded-3" src={post.imageURL} alt="post image"/>
                </div>


            </div>
        </>
        )
}

export default PostSummaryItem;

