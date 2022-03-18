import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "./postSummaryItem";

const PostSummaryList = () => {

    return (
        posts.map(post => {
            return (
                <PostSummaryItem post={post} />
            );
        })
    );

}

export default PostSummaryList;