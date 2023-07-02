import { useEffect, useReducer, useRef } from 'react';
import axios from 'axios';
import todoReducer from '../../../reducers/todoReducer';

const TodosVariant2 = () => {
  console.log('program stated');
  const todoInput = useRef('');
  const [todoState, todoDispatch] = useReducer(todoReducer);
  console.log(todoState); // undefined. you can get the state from reducer here
  console.log(todoDispatch); // dispatcher fn from react core

  useEffect(() => {
    // will be called after initial rendering
    // ideal place for us to call REST API calls

    /*
    1. what is the REST API  URL/Endpoint? https://jsonplaceholder.typicode.com/todos?_limit=3
    2. ehat is the Http Method? GET
    3. What is the REST API / Http client tool? axios
    */

    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then((res) => {
        // if api call is successful we will get response
        console.log(res.data);
        todoDispatch({
          type: 'LIST_TODOS',
          payload: res.data
        });
      })
      .catch((err) => {
        // if error
        console.log(err);
      })
      .finally(() => {
        console.log('it is over!');
      });
  }, []);

  const handleAddTodo = () => {
    console.log(todoInput.current.value);
    todoDispatch({
      type: 'ADD_LIKE',
      payload: {
        id: Math.floor(Math.random() * 100000),
        title: todoInput.current.value,
        isComplete: false
      }
    });
  };
  console.log('program ended');
  const isArrayEmpty = () => {
    if (!Array.isArray(todoState) || todoState.length === 0) {
      return (
        <div className="alert alert-danger">
          No todos found Please add something
        </div>
      );
    }
  }

  return (
    <div style={{ backgroundColor: '#B2EBF2', padding: '20px' }}>
      <h3>Todos App with useReducer and useRef</h3>

      <div className="row">
        <div className="col-md-4">
          {/* Uncontrolled Component = form data is handled by the DOM itself. */}
          <input
            type="text"
            className="form-control"
            placeholder="What do you want to do today?"
            ref={todoInput}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-success" onClick={handleAddTodo}>
            ADD TODO
          </button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6">
          {/* no todos found if todo state emtpty or undefined */}
          {isArrayEmpty()}
          <div className="card">
            <ul className="list-group list-group-flush">
              {todoState?.map((todo) => {
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

export default TodosVariant2;
