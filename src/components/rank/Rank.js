import React from 'react';

const Rank = ({ rank, name }) => {
	return (
		<div className='f3'>
			<div className='white f3'>
				{`${name}, your current number of entries is...${rank}`}
			</div>
		</div>
	);
}

export default Rank;