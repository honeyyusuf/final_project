import Productlist from './productlist';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { render } from 'react-dom';
const handelChange = ()=>{
  return(<Productlist/>);
 }

export default function product() {
 
  return(<Button type="submit" onClick={handelChange} className="rounded-0">
    Add to Product list
  </Button>)
}