import React, { Component } from 'react';

class MyProfile extends Component {
  // JS == JSX
  state = {
    profileName: 'Mehak'
  };

  handleProfileNameChange = (event) => {
    console.log(event.target.value);
    this.setState({
      profileName: event.target.value
    });
  };

  render () {
    return (
      <div>
        <h3>MyProfile</h3>
        {/* controlled component def here */}
        {/* An input form element whose value is controlled by React is called as controlled component */}
        <input
          type="text"
          value={this.state.profileName}
          onChange={this.handleProfileNameChange}
        />
        <p>Profile Name: {this.state.profileName}</p>
      </div>
    );
  }
}

export default MyProfile;
