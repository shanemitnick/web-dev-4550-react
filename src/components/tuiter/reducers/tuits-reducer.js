import tuits from "../data/tuits.json";

const tuitsReducer = (state = tuits, action) => {
    switch (action.type) {

        case 'delete-tuit':
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
            return tuits;
        case 'create-tuit':
            const newTuit = {
                title: action.tuit,
                _id: (new Date()).getTime() + '',
                postedBy: {
                    "username": "ReactJS"
                },
                topic: "Web Delopment",
                userName: "shanemitnick",
                retweets: 111,
                likes: 222,
                replies: 333,
                liked: false


            }
            return [
                newTuit,
                ...state,
            ];

        case 'like-tuit':
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.liked === true) {
                        tuit.liked = false;
                        tuit.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });
        default:
            return tuits
    }

}

export default tuitsReducer;