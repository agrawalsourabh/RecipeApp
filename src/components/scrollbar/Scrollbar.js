import React from 'react'
import './Scrollbar.css'

const Scrollbar = (props) => {
	return(
		<div className='scrollbar'>
			{props.children}
		</div>
	);
	
};

export default Scrollbar;