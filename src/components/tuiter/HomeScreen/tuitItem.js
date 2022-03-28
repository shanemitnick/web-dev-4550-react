import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../components/tuit-stats";

const TuitItem = (post) => {
    const dispatch = useDispatch();

    const deleteTuit = (tuit) => {
      dispatch({type: 'delete-tuit', tuit}) ;
    };
    post = post.tuit;
    return(
        <>
            <div className="row border pt-1 me-1 ms-1">
                <div className="col-2">
                    <img width="56px" className="rounded-3" src={post.imageURL} alt="user avatar"/>
                </div>
                <div className="col-9">
                    <p className="fw-bold d-inline"> {post.name}</p> <p
                    className="text-secondary d-inline"> @{post.userName}- {post.time}</p>

                    <p className="mb-0"> {post.title}</p>
                    <TuitStats tuit={post}/>
                    <button onClick={() => deleteTuit(post)}>Delete Tweet</button>

                </div>


            </div>
        </>
    )
}

export default TuitItem;