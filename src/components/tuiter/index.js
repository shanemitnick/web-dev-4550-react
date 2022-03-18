import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList/index";
import ExploreComponent from "./ExploreScreen/ExploreComponent";

function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar  active="explore"/>
            </div>

            <div className="col-6">
                <ExploreComponent />
            </div>

            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList  />
            </div>

        </div>
    );
}

export default Tuiter;