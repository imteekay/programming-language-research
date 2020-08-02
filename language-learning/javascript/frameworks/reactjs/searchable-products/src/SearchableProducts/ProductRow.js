import React from 'react';

const ProductRow = (props) => (
	<tr>
		<td>{props.product.name}</td>
		<td>{props.product.price}</td>
	</tr>
)

export default ProductRow;