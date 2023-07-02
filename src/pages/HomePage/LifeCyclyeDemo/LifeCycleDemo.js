// rce
import React, { Component } from 'react';

class LifeCycleDemo extends Component {
  constructor () {
    // constructor is optional always but loads 1st
    console.log('===1. Inside constructor ===');
    super();
    // component-wise initial data
    this.state = {
      isLoading: true,
      isError: false,
      featureName: '',
      users: []
    };
  }

  // lifecycle hook starts here
  componentDidMount () {
    console.log('===3. Inside componentDidMount===');
    // will be called only once after initial rendering
    // when the comp's UI comes into view --  componentDidMount will be called
    // ideal place for you to send REST API Calls
    // mocking REST API call with timeout
    setTimeout(() => {
      // upon getting successful response
      this.setState({
        isLoading: false,
        isError: false,
        featureName: 'Understanding LifeCycle Hooks',
        users: [{}, {}]
      });

      // upon getting error response
      // this.setState({
      //   isLoading: false,
      //   isError: true,
      //   featureName: ''
      // });
    }, 5000); // assuming after 5 sec we get resp
  }

  shouldComponentUpdate (nextProps, nextState) {
    // must return either true or false
    // when the setState is called -- this will be executed
    console.log('===4. Inside shouldComponentUpdate === ');
    // you have to compare the prevState (this.state) and new State (nextState)
    // you can also compare prevProps (this.props) and nextProps
    // must return either true or false
    console.log(this.state);
    console.log(nextState);
    console.log(this.props);
    console.log(nextProps);
    if (JSON.stringify(this.state) === JSON.stringify(nextState)) {
      return false;
    } else {
      // compare the prevState and nextState
      return true;
    }
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('===6. Inside componentDidUpdate ===');
    // called immediately after the update in JSX (after re-rendering)
    // will never be called after initial Rendering
    // this is ideal for DOM manipulations
    document.getElementById('myPara').style.color = 'green';
  }

  componentWillUnmount () {
    // when the comp's UI goes out of the view --  componentWillUnmount will be called
    console.log('=== 7. Inside componentWillUnmount ===');
    // ideal place for you to clear the data and remove intervals and timeouts
    // Perform any necessary cleanup in this method, such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount.
  }

  render () {
    console.log('===2 & 5. Inside Render ===');
    // this render method will be executed immediately after constructor -- Initial Rendering
    // this render method will be called after state updated
    // NEVER EVER Update state here
    if (this.state.isLoading) {
      return <div className="spinner-border text-success" role="status"></div>;
    }

    if (this.state.isError) {
      return (
        <div className="alert alert-danger">
          Sorry...Some Error Occurred! Try again later!!
        </div>
      );
    }

    return (
      <div>
        <h3>LifeCycleDemo</h3>
        <p id="myPara">Feature we are learning: {this.state.featureName}</p>
      </div>
    );
  }
}

export default LifeCycleDemo;
