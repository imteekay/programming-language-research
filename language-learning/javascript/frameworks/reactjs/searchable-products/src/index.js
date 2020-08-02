import React from 'react';
import { render } from 'react-dom';
import SearchableProducts from './SearchableProducts';
import { products } from './data/products'
import './index.css';

render(
  <SearchableProducts products={products} />,
  document.getElementById('root')
);
