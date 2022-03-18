import who from "./who.json";
import WhoToFollowListItem from "./whoToFollowListItem";

const WhoToFollowList = () => {

    console.log(who);
    return (
            <ul className="list-group">
                <li className="list-group-item fw-bold">Who To Follow </li>
                {who.map(item => {
                    return (
                        <WhoToFollowListItem who={item}/>
                    );
                })}
            </ul>
     );
}

export default WhoToFollowList;