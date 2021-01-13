import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Image from 'react-bootstrap/Image';

export default function FormExample(props) {
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    company: '',
    title: '',
    email: '',
    phone: '',
    companyUrl: '',
    contactMethod: 'both',
    handle: '',
    description: '',
    comments: '',
    stageId: 1,
    reviewerId: 1

  });


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {

      event.stopPropagation();
    } else {
      props.onSave(state);
    }

    setValidated(true);

  };

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  return (


    <Container>

      <Row>
        <h2>
          Vendor Application
      </h2>
      </Row >


      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row >
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              name='firstName'
              value={state.firstName}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name='lastName'
              value={state.lastName}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row >
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Company name" required
              value={state.company}
              name='company'
              onChange={handleChange} />

          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Title in Company</Form.Label>
            <Form.Control type="text" placeholder="CEO" required
              value={state.title}
              name='title'
              onChange={handleChange} />
          </Form.Group>
        </Form.Row>

        <Form.Row >
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="user@email.com" required
              value={state.email}
              name='email'
              onChange={handleChange} />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom06">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phone number" placeholder="000-000-0000" required
              value={state.phone}
              name='phone'
              onChange={handleChange} />
          </Form.Group>
        </Form.Row>
        <Form.Row >
          <p>
            Preferred method of contact
        </p>
        </Form.Row>
        <Form.Row >
          <Form.Group >

            <Col xs={2} sm={2}
            >
              <Form.Check
                type="radio"
                label="Email"
                name="contactMethod"
                id="formHorizontalRadios1"
                value='email'
                checked={state.contactMethod === 'email'}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Phone"
                name="contactMethod"
                id="formHorizontalRadios2"
                value='phone'
                checked={state.contactMethod === 'phone'}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Both"
                name="contactMethod"
                id="formHorizontalRadios3"
                value='both'
                checked={state.contactMethod === "both"}
                onChange={handleChange}

              />
            </Col>
          </Form.Group>
        </Form.Row>
        <Form.Row >
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Company Website</Form.Label>
            <Form.Control type="text" placeholder="Company name" required
              value={state.companyUrl}
              name='companyUrl'
              onChange={handleChange} />

          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Company Instagram</Form.Label>
            <Form.Control type="text" placeholder="Company name" required
              value={state.handle}
              name='handle'
              onChange={handleChange} />

          </Form.Group>
        </Form.Row>

        <Form.Group controlId="exampleForm.ControlTextarea1" >
          <Form.Label>Brief Company Description</Form.Label>
          <Form.Control as="textarea" rows={3}
            value={state.description}
            name='description'
            onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1" >
          <Form.Label>Questions or Comments
    </Form.Label>
          <Form.Control as="textarea" rows={3} value={state.comments}
            name='comments'
            onChange={handleChange} />
        </Form.Group>
        <Form.Group >
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit" variant="success"

        >Submit</Button>
      </Form>
    </Container>
  );
}