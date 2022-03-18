import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "./postSummaryItem";

const PostSummaryList = () => {
    console.log(posts);
    return (
        posts.map(post => {
            console.log(post);
            return (
                <PostSummaryItem post={post} key={post.userName}/>
            );
        })
    );

}

export default PostSummaryList;