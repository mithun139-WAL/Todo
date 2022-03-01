import { useReducer, useState } from "react";
import TodoList from "./TodoList";
import TodoContext from "./TodoContext";

export default function Todo() {
    const [todoInput, settodoInput] = useState("");
    const [todoSelect, settodoSelect] = useState("Completed");
    const ACTIONS = {
        ADD_TODO: 'add-todo',
        RESET: 'reset',
        REMOVE: 'remove'
    }
    const TodoReducer = (state, action) => {
        switch (action.type) {
            case ACTIONS.ADD_TODO:
                return {
                    todos: [
                        ...state.todos,
                        {
                            id: Date.now(),
                            todoItem: todoInput,
                            todoStatus: todoSelect
                        },
                    ],
                };

            case ACTIONS.REMOVE:
                {
                    let modifiedTodos = [];
                    state.todos.filter((todo) => {
                        if (action.todoid !== todo.id) {
                            modifiedTodos.push(todo);
                        }
                    });
                    return { todos: modifiedTodos };
                }
            case ACTIONS.RESET:
                return { todos: [] };
        }
    }

    const [state, dispatch] = useReducer(TodoReducer, { todos: [] });

    return (
        <div>
            <h2 className="text-muted my-3">Todo Application</h2><hr className="col-6 border border-primary"/>
            <input
                type="text"
                className="form-control col-lg-4 col-md-8 my-5 mx-auto"
                placeholder="Enter a Task To do"
                value={todoInput}
                onChange={(e) => {
                    settodoInput(e.target.value);
                }}
            />
            <select
                className="form-control col-lg-4 col-md-8 my-5 mx-auto"
                value={todoSelect}
                onChange={(e) => {
                    settodoSelect(e.target.value);
                }}
            >
                <option>Completed</option>
                <option>Incomplete</option>
            </select>
            <div className="todoFormButtons">
                <button
                    className="btn btn-info m-3 col-2"
                    onClick={() => {
                        dispatch({ type: ACTIONS.RESET });
                    }}
                >
                    Clear All
                </button>
                <button
                    className="btn btn-primary m-3 col-2"
                    onClick={() => {
                        if (todoInput.length != 0) {
                            dispatch({ type: ACTIONS.ADD_TODO });
                        } else {
                            alert("Add a Task");
                        }
                    }}
                >
                    Add
                </button>
            </div>
            <TodoContext.Provider value={{ state, dispatch }}>
                <TodoList />
            </TodoContext.Provider>
        </div>
    );
}