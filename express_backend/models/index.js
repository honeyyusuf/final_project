module.exports = db => {

  const getUsers = () => {

    const query = {
      text: `SELECT * FROM vendors`
    }

    return db.query(query)
      .then(result => result.rows)
      .catch(err => err)
  }

  const getProducts = () => {

    const query = {
      text: `SELECT vendors.id as vendor_id, 
      first_name, 
      email, 
      products.id as product_id,
      product_name
      FROM vendors
      INNER JOIN products 
      ON vendors.id = products.vendor_id`
    }

    return db.query(query)
      .then(result => result.rows)
      .catch(err => err)
  }

  return {
    getUsers,
    getProducts
  }

}