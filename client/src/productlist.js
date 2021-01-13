import React from "react";
//import {useState} from "react";
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import './productlist.css';

export default function productlist() {
  return(
  <Container className="mt-5">

     <Row className="d-flex justify-content-center mt-5 mb-5">
      <h2>
        Product Information
      </h2>
    </Row >
  <form>
  <div class="product-info-divide">
      <h4>Indentifier</h4>
    </div>
    <div class="form-row">
      <div class="col">
      <label>Product Name</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col">
      <label>UPC Code</label>
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="product-info-divide">
      <h4>Price</h4>
    </div>
      <div class="form-row">

        <div class="col">
        <label>Whole Sale Price</label>
          <input type="text" class="form-control" />
        </div>
        <div class="col">
        <label>Retail Price</label>
          <input type="text" class="form-control" />
        </div>
      </div>

    <div class="product-info-divide">
      <h4>Dimensions</h4>
    </div>

    <div class="form-row">
      <div class="col">
      <label>Weigth(Lbs)</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col">
      <label>Height(inches)</label>
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="form-row">
      <div class="col">
      <label>Length(inches)</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col">
      <label>Width(inches)</label>
        <input type="text" class="form-control" />
      </div>
    </div>
    
    <div class="product-info-divide">
      <h4>Stock</h4>
    </div>
    <div class="form-row">
      <div class="col">
      <label>Inventory Threshold</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col">
      <label>Preferred Stock Level</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col">
      <label>SKU</label>
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="product-info-divide">
      <h4>Details</h4>
    </div>
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Product Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Ingredients List (Where applicable)</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="product-info-divide">
      <h4>Pictures</h4>
    </div>
  </form>
  
  </Container>
  )
  
}
