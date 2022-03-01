import Todo from "./Todo";
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
                        todoItem: Todo.todoInput,
                        todoStatus: Todo.todoSelect
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
export default TodoReducer;