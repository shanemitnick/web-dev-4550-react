import ToDoItem from "./ToDoItem";
import todos from './todos.json';

const TodoList = () => {
    return(
        <>
            <h1> TO DO Porting from JS -> React</h1>

            <ul>
                {
                    todos.map(todo => {
                    return(<ToDoItem todos={todo} />);
                 })
                }
            </ul>
        </>
    );
}
export default TodoList;

