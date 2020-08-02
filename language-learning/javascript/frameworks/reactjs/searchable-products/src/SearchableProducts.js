import React, { Component } from 'react';
import './SearchableProducts.css';
import SearchProducts from './SearchableProducts/SearchProducts';
import ProductsList from './SearchableProducts/ProductsList';

export default class SearchableProducts extends Component {
  constructor() {
    super();
    this.state = { filterText: '' };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText) {
    this.setState({ filterText: filterText });
  }

  render() {
    return (
      <div className="SearchableProducts">
        <SearchProducts 
          filterText={this.state.filterText}
          onChangeInput={this.handleUserInput}
        />
        <ProductsList 
          products={this.props.products}
          filterText={this.state.filterText}
        />
      </div>
    );
  }  
}
