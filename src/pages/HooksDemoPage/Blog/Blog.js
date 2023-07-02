import React, { useEffect, useState } from 'react';

const Blog = () => {
  console.log('Blog console');
  console.log('Program started');
  const [topicName, setTopicName] = useState('React Hooks!');
  const [publishedDate, setPublishedDate] = useState(new Date());

  // In useEffect Hook - 1st param is: effect callback, 2nd param is dependency list
  useEffect(() => {
    // runs after initial rendering
    console.log(' 3. Inside Use Effect Callback');
    // this is alternative to lifecycle hook -- componentDidMount componentDidUpdate
    // ideal hook in a func comp to send REST API calls
    // you can update the state from here
    document.title = topicName;
  }, [topicName, publishedDate]); // second arg is dependency. it is an array and it is optional
  // if dependecy is changed by any means than effect callback will be called
  const handleUpdateTopicName = () => {
    // console.log(setTopicName);
    setTopicName('Demo of useEffect hook and useState Hook');
    console.log('Program ended');
  };
  return (
    <>
      <h3>Blog</h3>
      <p>Topic Name: {topicName}</p>
      <button className="btn btn-outline-primary" type="button" onClick={handleUpdateTopicName}>
        Update topic name
      </button>

      <p>Published Date: {publishedDate.toString()}</p>
      <button className="btn btn-outline-primary" type='button' onClick={() => { setPublishedDate(new Date()) }}>Update Published Date</button>
      <hr />
    </>
  );
};

export default Blog;
