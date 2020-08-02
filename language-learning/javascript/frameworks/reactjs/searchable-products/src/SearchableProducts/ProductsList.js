import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductsList extends Component {
	_groupBy(products , iterator) {
	  let groups = {};

	  products.forEach(function(product) {
	    const category = JSON.stringify(iterator(product));
	    groups[category] = groups[category] || [];
	    groups[category].push(product);
	  });

	  return groups;
	}

	render() {		
		let result = this._groupBy(this.props.products, function(product) {
		  return product.category;
		});

		let productsTables = [],
				filteredText = this.props.filterText.toUpperCase();

		Object.keys(result).forEach((category) => {
		  let filteredProducts = result[category].filter((product) => {
		  	return product.name.toUpperCase().indexOf(filteredText) > -1;
		  });

		  if (filteredProducts.length > 0) {
		  	productsTables.push(<ProductCategoryRow category={category} key={category} />);
		  }

			filteredProducts.forEach((filteredProduct) => {				
				productsTables.push(<ProductRow product={filteredProduct} key={filteredProduct.name} />);
			})		  
		});

		return (
			<table>
				<tbody>{productsTables}</tbody>
			</table>
		);
	}	
}
