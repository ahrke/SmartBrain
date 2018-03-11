import React from 'react';
import Logo from '../logo/Logo';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	return (
		<nav style={{display:'flex', justifyContent: 'space-between' }}>
			<div style={{alignSelf:'flex-start'}}>
				<Logo />
			</div>
			{ (isSignedIn === false) ?
				<div style={{display:'flex',justifyContent:'flex-end' }}>
					<p onClick={() => onRouteChange('register')} className='f3 link dim white pa3 pointer'>Register</p>
					<p onClick={() => onRouteChange('signin')} className='f3 link dim white pa3 pointer'>Sign In</p>
				</div>
				: 	<p onClick={() => onRouteChange('signout')} className='f3 link dim white pa3 pointer'>Sign Out</p>
			} 
		</nav>
	);
}

export default Navigation;