import React from 'react';

var TodoForm  = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();
		var newTodo = this.refs.newTodo.value;
		
		if(newTodo.length > 0){
			this.refs.newTodo.value = '';
			this.props.onNewTodo(newTodo);
		} else {
			tis.refs.newTodo.focus();
		}

	},
	render:function (){
		return(
			<div>
				<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="newTodo" placeholder="Enter new Todo"/>
				<button className="hollow expanded button">Submit</button><br/>
			</form>
			</div>
			);
	}
});
module.exports= TodoForm;