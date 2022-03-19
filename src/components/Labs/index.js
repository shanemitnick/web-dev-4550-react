import Classes from './Classes';
import Style from "./Style/index";
import ConditionalOutput from "./conditional-output";
import ToDoList from "./todo/ToDoList";
import {Link} from "react-router-dom";


const Labs = () => {

    return (
        <div>
            <h2> Assignment 6 Lab</h2>
            <Classes />
            <Style />
            <ConditionalOutput />
            <ToDoList />

            <Link to="/tuiter"> <h1>LINK TO REACT TUITER (FOR ASSIGNMENT 6) </h1> </Link>
            <br/>
            <Link to="/hello"> Link to Hello World</Link>
        </div>
    )
};

export default Labs;
