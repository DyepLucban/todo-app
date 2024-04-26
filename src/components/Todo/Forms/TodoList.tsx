import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Task {
  id: Number;
  task_name: String;
}

const TodoList = ({todos, setTodos}: any) => {

  const baseUrl = 'http://localhost:4000/api/task';

  const handleDelete = (id: Number) => {
    console.log(id);
    const todoData: Array<Object> = todos.filter((todo: any) => todo.id !== id);

    axios({
      method: 'DELETE',
      url: `${baseUrl}/${id}`,
    }).then((res) => {
      setTodos(todoData);
    });
  }

  return (
    <div>
      {todos.map((data: any) => (
          <li key={data.id} className="list-item">
            <input
              type="text"
              value={data.task_name}
              className="list"
              onChange={(e) => e.preventDefault()}
            />
            <div>
              <button className="button-edit task-button">
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                className="button-delete task-button"
                onClick={() => handleDelete(data.id)}  
              >
                <FontAwesomeIcon icon={faTrash} />            
              </button>
            </div>
          </li>
        )
      )}
    </div>
  );
}

export default TodoList;
