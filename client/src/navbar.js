import React from "react";
import nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';


export default function Nav() {

  return(<nav className="d-flex flex-row bg-white border-top border-bottom mt-5 ml-5 mr-5 navbar">
  <Image className="mt-4 mb-4 border-0" src="https://allgoodshop.blob.core.windows.net/default/0000011_Logo-v3-44aa00-222x60.png" thumbnail />
</nav>);
}