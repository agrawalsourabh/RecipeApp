import React from 'react';
import './Search.css'

class Search extends React.Component{
	render(){
		return(
			<div className='search'>
				<input className='search-input' type='search' placeholder='search recipe' onChange = {this.props.searchChange}/>
				<button className='submit-btn bg-green br3' onClick = {this.props.searchBtnClick}> Search </button>
			</div>
		);
	}
}

export default Search;