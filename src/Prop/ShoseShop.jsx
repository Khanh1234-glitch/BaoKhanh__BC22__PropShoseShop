import React, { Component } from 'react'
import data from "./../data.json"
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import Modal from './Modal';
export default class ShoesShop extends Component {
  constructor(props) {
    super(props)
    this.state = {
       selectedProduct:{}, 
       selectedBought:[],
       }
  }
  handleSelectProducts = (product) => {
    console.log(product);
    this.setState({ selectProducts: product });
  };
  onChoiced = (shoesChoiced) => {
    this.setState({shoesChoiced:shoesChoiced})
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center">ShoesShop</h1>
        <div className="d-flex justify-content-end">
              <button className="btn btn-danger" data-toggle="modal" data-target="#exampleModal">Giỏ hàng</button>
          </div>
        <ProductList products={data} onSelect={this.handleSelectProducts} shoesChoiced={this.state.shoesChoiced}/>
        {/* <ProductDetail product={this.state.selectedProduct}/> */}
        {/* <Modal shoesChoiced={this.state.shoesChoiced}/> */}
      </div>
    );
  }
}
