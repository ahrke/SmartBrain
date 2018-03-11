import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div className='f3 white'>
			<p>
				{`This Magic Brain will detect faces in your picture!`}
			</p>
			<div className='center'>
				<div className='br3 center pa4 br3 shadow-5 br3 ba b--solid b--white-90'>
					<input className='f4 pa2 w-70 center br3 ba b--solid b--white-90' type='text' onChange={onInputChange}/>
					<button className='w-30 br3 ba b--solid b--white-90 grow f4 bg-transparent link ph3 pv2 dib white' style={{marginLeft: '10px'}} onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;