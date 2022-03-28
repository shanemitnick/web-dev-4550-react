import React from 'react';
import TuitItem from "./tuitItem";
import {useSelector} from "react-redux";

const TuitList = () => {
    const posts = useSelector(
        state => state.tuits);

    return (
        <div>
            <ul className="ttr-tuits list-group">
                {
                    posts.map && posts.map(tuit =>

                        <TuitItem key={tuit._id}
                                      tuit={tuit}/>)
                }
            </ul>
        </div>
    );

}
export default TuitList;