import React from 'react';
import Tilt from 'react-tilt'
import brain from './white-brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 tc" options={{ max : 55 }} >
			 	<div className="Tilt-inner"><img alt='logo' style={{paddingTop: '40px'}} src={brain}/></div>
			</Tilt>
		</div>
	)
}

export default Logo;