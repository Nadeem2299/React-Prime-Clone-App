import React from 'react';
import { Helmet } from 'react-helmet-async';
import Blog from './Blog/Blog';
import MyAccount from './MyAccount/MyAccount';
import PaymentForm from './PaymentForm/PaymentForm';
import TodosVariant1 from './TodosVariant1/TodosVariant1';
import TodosVariant2 from './TodosVariant2/TodosVariant2';

const HooksDemoPage = () => {
  return (
    <>
      <Helmet>
        <title>Prime Video | Hooks demo</title>
      </Helmet>
      <div className="container">
        <h1>HooksDemoPage</h1>
        <h2>useState Demo</h2>
        <h2>My Account | Use state </h2>
        <MyAccount />
        <hr />
        <h2>useEffect Demo</h2>
        <Blog />
        <h2>useRef and useReducer Demo</h2>
        <TodosVariant1 />
        <TodosVariant2 />
        <h2>useId Demo</h2>
        <PaymentForm />
        <h2>useContext- will be explained in other component Demo</h2>
      </div>
    </>
  );
};

export default HooksDemoPage;
