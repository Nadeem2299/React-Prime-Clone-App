import React from 'react';
import './Subscription.css';

const Subscription = () => {
  // inernal styles
  const subscriptionStyles = {
    renewStyles: {
      backgroundColor: 'red',
      color: '#fff',
      padding: '20px',
      border: '2px solid #000',
      borderRadius: '20px'
    },
    btnStyles: {
      backgroundColor: 'red',
      color: '#fff',
      padding: '20px',
      border: '2px solid #000',
      borderRadius: '20px'
    }
  };

  return (
    // using external css from -- bootstrap
    <div className="text-center subscription">
      {/* external css subscription.css */}
      <h3 className="subscription-text">
        You are an Active Subscriber of Prime Video
      </h3>
      {/* inline css  */}
      <p style={subscriptionStyles.renewStyles}>
        your subscription will end in 2 weeks
      </p>
      <p
        style={{
          backgroundColor: 'yellow',
          color: '#000',
          padding: '20px',
          border: '2px solid red',
          borderRadius: '20px'
        }}
      >
        Renew now and get 50% discount
      </p>
      <button style={subscriptionStyles.btnStyles}>Renew now</button>
    </div>
  );
};

export default Subscription;
