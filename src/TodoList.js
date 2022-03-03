import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "./TodoContext";

export default function TodoList() {
    const reducerValue = useContext(TodoContext);
    return (
        <div>
            {
                reducerValue.state.todos.length == 0 ? 
                (
                    <h1 className="text-center">Nothing To do!</h1>
                ) : 
                (
                    reducerValue.state.todos.map((todo) => {
                        return (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                dispatch={reducerValue.dispatch}
                            />
                        );
                    })
                )
            }
        </div>
    );
}
