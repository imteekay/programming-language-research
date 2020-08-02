import React, { Component } from 'react';

export default class SearchProducts extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		this.props.onChangeInput(this.refs.filterText.value);
	}

	render() {
		return (
			<form>
				<input 
					type="text" 
					placeholder="Enter a product name"
					ref="filterText"  
					onChange={this.handleChange}
				/>
			</form>
		);
	}
};
