import React, { useRef, useState } from 'react';

const TodosVariant1 = () => {
  // creat a ref for the input element to capture the entered input
  const todoInput = useRef('');
  console.log(todoInput.current)
  // todo list
  const [todoList, setToDoList] = useState([
    {
      id: 1,
      title: 'first todo'
    },
    {
      id: 2,
      title: 'Second todo'
    }
  ]);

  const handleAddTodo = () => {
    console.log(todoInput.current.value);
    setToDoList([
      ...todoList,
      {
        id: todoList.length + 1,
        title: todoInput.current.value
      }
    ]);
  }
  return (
    <div style={{ backgroundColor: '#ddd', padding: '20px' }}>
      <h3>Todos App with useState and useRef</h3>
      <div className="row">
        <div className="col-md-4">
          {/* uncontrolled component  */}
          <input
            type="text"
            className="form-control"
            placeholder="What do you want to do today?"
            ref={todoInput}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={handleAddTodo}>ADD TODO</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="card">
            <ul className="list-group list-group-flush">
              {todoList?.map((todo) => {
                return (
                  <li className="list-group-item" key={todo.id}>
                    {todo.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosVariant1;
