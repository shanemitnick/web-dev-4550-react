import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };

    return (
        <>
            <span onClick={likeTuit}>
                <i className="fas fa-heart me-1"
                   style={tuit.liked === true ? {color: 'red'} : {color: 'blue'}} />

                {/*{*/}
                {/*    tuit.liked &&*/}
                {/*    <i className="fas fa-heart me-1"*/}
                {/*       style={{color: 'red'}}></i>*/}
                {/*}*/}
                {/*{*/}
                {/*    !tuit.liked &&*/}
                {/*    <i className="far fa-heart me-1"></i>*/}
                {/*}*/}


            </span>
            <p className="text-secondary mt-0 mb-0">{tuit.replies} Replies | {tuit.likes} Likes | {tuit.retweets} Retweets</p>
        </>
);
}
export default TuitStats;