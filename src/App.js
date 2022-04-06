import HelloWorld from "./components/HelloWorld";
import Labs  from "./components/Labs/index";
import Index from "./components/tuiter";
import ExploreComponent from "./components/tuiter/ExploreScreen/ExploreComponent";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import NotificationComponent from "./components/tuiter/NotifcationScreen";
import HomeScreen from "./components/tuiter/HomeScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Index/>}>
                            <Route index
                                   element={<ExploreComponent />}/>
                            <Route path="home"
                                   element={<HomeScreen />}/>
                            <Route path="notifications"
                                   element={<NotificationComponent />}/>
                            ...
                        </Route>
                    </Route>
                </Routes>
                <Link to="/labs">Labs</Link> <br/>
                <Link to="/tuiter">Tuiter Explore</Link> <br/>
                <Link to="/tuiter/home">Tuiter Home</Link> <br/>
                <h3>Please go to /labs for the labs section, and /tuiter for the tuiter section. Typing /tuiter/home and tuiter/explore is still needed.</h3>
            </div>
        </BrowserRouter>
    );
}


export default App;
