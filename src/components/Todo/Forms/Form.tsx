import React, { useEffect } from "react";
import axiosInstance from "../../../api";

interface Task {
  id: Number;
  task_name: String;
}

const Form = ({ input, setInput, todos, setTodos }: any) => {
  const baseUrl = 'http://localhost:4000/api/task';

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  }

  const onHandleSubmit = (e: any) => {
    const payload = { task_name: input }
    e.preventDefault();
    axiosInstance({
      method: 'POST',
      url: baseUrl,
      data: payload
    }).then((res: any) => {
      setTodos([...todos, { task_name: res.data.task_name }]);
      setInput("")
    });
  }

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="text"
        placeholder="What to do?"
        className="task-input"
        value={input}
        required
        onChange={handleInputChange}
      />
      <button className="button-add">
        Add
      </button>
    </form>
  )
}

export default Form;
