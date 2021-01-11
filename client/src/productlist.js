import React from "react";
//import {useState} from "react";
import {Container} from 'react-bootstrap'

export default function productlist() {
  return(
  <Container>
  <form>
    <div class="form-row">
      <div class="col">
      <label>Product Name</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col">
      <label>UPC Code</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col">
      <label>Whole Sale Price</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col">
      <label>Retail Price</label>
        <input type="text" class="form-control" />
      </div>
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
      <div class="col">
      <label>Length(inchs)</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col">
      <label>Width(inchs)</label>
        <input type="text" class="form-control" />
      </div>
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
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Ingredients List</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  </form>
  
  </Container>
  )
  
}
