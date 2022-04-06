import {useDispatch} from "react-redux";
import React from "react";
import {updateTuit} from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };

    const  handleClick = async () => {
        console.log("HI");
        await updateTuit(dispatch,
            {...tuit, likes: tuit.likes + 1});
    }

    return (
        <>
            <span onClick={likeTuit}>
                <i className="fas fa-heart me-1"
                   onClick={() => handleClick}
                   style={tuit.liked === true ? {color: 'red'} : {color: 'green'}} />

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