import React from 'react';
import './Recipe.css';

class Recipe extends React.Component{
	
	render(){
		const ingredientList = this.props.result.recipe.ingredients.map(ingredient =>{
						return <li>{ingredient.text}</li>
		})

		return(
			<div className='recipe grow br2 ba dark-gray b--black-10 mw5 shadow-4'>
				<img className='food-image' src={this.props.result.recipe.image} alt='food' />
				<h2 className='title f4'> {this.props.result.recipe.label} </h2>
				<h3 className='ingredients f5 f5-ns mv0'> Ingredients </h3>
				<ul>
					{ingredientList}
				</ul>
			</div>
		);
	}
}

export default Recipe;