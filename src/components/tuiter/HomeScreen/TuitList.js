import React, { useEffect } from 'react';
import TuitItem from "./tuitItem";
import {useDispatch, useSelector}
    from "react-redux";
import {findAllTuits} from "../actions/tuits-actions";


const TuitList = () => {
    const posts = useSelector(
        state => state.tuits);

    const dispatch = useDispatch();
    useEffect(() => findAllTuits(dispatch)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , []);



    return (
        <div>
            <ul className="ttr-tuits list-group">
                {
                    posts.map && posts.map(tuit =>

                        <TuitItem key={tuit._id}
                                    post={tuit}/>)
                }
            </ul>
        </div>
    );

}
export default TuitList;