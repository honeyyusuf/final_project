const express = require('express');
const router = express.Router();

module.exports = ({ getUsers, getProducts }) => {
  /* GET users listing. */
  router.get('/', function(req, res) {
    getUsers()
      .then(users => res.json(users))
      .catch(err => res.json({ msg: err.message }))
  });
  
  /* GET vendor products */
  router.get('/products', function(req, res) {
    getProducts()
      .then(vendorProducts => res.json(vendorProducts))
      .catch(err => res.json({ msg: err.message }))
  });

 return router;
}

