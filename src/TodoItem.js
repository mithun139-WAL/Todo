export default function TodoItem(props) {
    return (
        <div className="col-4 mx-auto">
            <ul className="d-flex list-group">
                <li className="list-group-item">
                    <span className="todoItemText float-left">Task: {props.todo.todoItem}</span><br />
                    <span className="todoItemText float-left">Status: {props.todo.todoStatus}</span>
                    <button
                        className="btn btn-warning float-right col-3"
                        onClick={() => {
                            props.dispatch({ type: "remove", todoid: props.todo.id });
                        }}
                    >Remove
                    </button>
                </li>

            </ul>
        </div>
    );
}