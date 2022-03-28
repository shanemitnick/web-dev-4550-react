import WhoToFollowListItem from "./whoToFollowListItem";
import {useSelector} from "react-redux";


const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);

    return (
            <ul className="list-group">
                <li className="list-group-item fw-bold">Who To Follow </li>
                {who.map(item => {
                    return (
                        <WhoToFollowListItem who={item} key={item.userName} />
                    );
                })}
            </ul>
     );
}

export default WhoToFollowList;