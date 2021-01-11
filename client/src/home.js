import React from "react";
import {useState} from "react";
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

export default function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

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
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row >
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" placeholder="Company name" required />
          
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Title in Company</Form.Label>
          <Form.Control type="text" placeholder="CEO" required/>
        </Form.Group>
      </Form.Row>

      <Form.Row >
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="user@email.com" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom06">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="phone number" placeholder="000-000-0000" required/>
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
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Phone"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Both"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
    </Form.Row>
    <Form.Row >
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Company Website</Form.Label>
          <Form.Control type="text" placeholder="Company name" required />
          
        </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Company Instagram</Form.Label>
          <Form.Control type="text" placeholder="Company name" required />
          
        </Form.Group>
      </Form.Row>
    
    <Form.Group  controlId="exampleForm.ControlTextarea1" >
    <Form.Label>Brief Company Description</Form.Label>
    <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <Form.Group  controlId="exampleForm.ControlTextarea1" >
    <Form.Label>Questions or Comments </Form.Label>
    <Form.Control as="textarea" rows={3}  />
    </Form.Group>
      <Form.Group >
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit" variant="success" >Submit</Button>
    </Form>
    </Container>
  );
}