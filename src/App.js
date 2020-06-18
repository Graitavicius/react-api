import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'reactstrap';




class App extends Component {
  state = {
    products: []
  }
  
  componentWillMount() {
    axios.get('http://localhost:3000/products')
      .then(response => {
        this.setState({
          products: response.data.products,
        })
      });
  }

  

  
  render () {
    let products = this.state.products.map((product) => {
      return (
        <tr key={product._id}>
          <td>{product.count}</td>
          <td>{product._id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.productImage}</td>
          <td>
            <Button color="success" size="sm" className="mr-2">Edit</Button>
            <Button color="danger" size="sm">Delete</Button>
          </td>
        </tr>
      )
    });
    return (
      <div className="App container">
        <Table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Actions</th>
              
            </tr>
          </thead>

          <tbody>
            { products }
          </tbody>


        </Table>
      </div>
    )
  }

}

export default App;
