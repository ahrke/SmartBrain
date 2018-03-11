import React from 'react';

//c3767252de524308a51a9d046db4f2b1

const Register = ({ onRouteChange }) => {

	return (
		<article className="br3 ba dark-gray b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main className="pa4 white-80">
			  <form className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
			        <input className="pa2 white input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="password">Password</label>
			        <input className="b pa2 white input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
			      </div>
			    </fieldset>
			    <div className="">
			      <input 
			      	onClick={() => onRouteChange('home')}
			      	className="b ph3 white pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
			      	type="submit" 
			      	value="Sign me up!" 
			      />
			    </div>
			  </form>
			</main>
		</article>
	)
}

export default Register;