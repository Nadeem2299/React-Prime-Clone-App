import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { PageContext } from '../../contexts/PageContext';

const ContactUsPage = () => {
  // step 3 of context API: Lets receive the data suplied thru PageContext
  const userStatus = useContext(PageContext);
  console.log(userStatus);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zip: '',
    isSubscribed: false
  });
  const handleChange = (e) => {
    // setEmail(e.target.value);
    // console.log(email);
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value]
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('inputs', inputs);
  };
  return (
    <>
      <Helmet>
        <title>Prime Video | Contact Us</title>
      </Helmet>
      <h2>Contact Us</h2>
      <p>Logged in Status: {userStatus.isLoggedIn ? 'logged In' : 'Not Logged In'}</p>
      <p>Last Login: {userStatus.lastLogin.toString()}</p>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={inputs.email}
              name="email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={inputs.password}
              name="password"
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            value={inputs.addressOne}
            name="addressOne"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            value={inputs.addressTwo}
            name="addressTwo"
            onChange={handleChange}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={inputs.city}
              name="city"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              value={inputs.zip}
              name="zip"
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            value={inputs.isSubscribed}
            name="isSubscribed"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ContactUsPage;
