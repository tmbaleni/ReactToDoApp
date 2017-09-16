import React from 'react';

var TodoSearch = React.createClass({
	handleSearch:function(){
		var searchText = this.refs.searchText.value;
		var showCompleted= this.refs.showCompleted.checked;

		this.props.onSearch(showCompleted, searchText);
	},
	render: function(){
		return (
			<div>
				<div>
					<input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch}/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
						Show Completed Todos
					</label>
				</div>
			</div>
			);
	}
});
module.exports=TodoSearch;