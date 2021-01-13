import React from "react";
import Container from 'react-bootstrap/Container';
//import bsCustomFileInput from 'bs-custom-file-input';
//import Form from 'react-bootstrap/Form';

export default function page() {

  return (
    <Container>
      <div class="card">
        <div class="card-header">
          Welcome Vendor name!
  </div>
        <div class="card-body">
          <h5 class="card-title">We have reviewed your application!</h5>
          <p class="card-text">Please sign the document below and upload it.</p>
          <a href='/somefile.txt' download>
            click here to download
    </a>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="customFile" />
            <label class="custom-file-label" for="customFile">Choose file</label>
          </div>

        </div>
      </div>





    </Container>
  );
}