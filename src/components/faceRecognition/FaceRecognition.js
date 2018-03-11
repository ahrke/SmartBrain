import React from 'react';
import './FaceRecognition.css';

//c3767252de524308a51a9d046db4f2b1

const FaceRecognition = ({ imageURL, box }) => {

	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputImage' src={imageURL} width='500px' height='auto' alt='imageRecognition'/>
				<div className='bounding_box' style={{top: box.topRow, left: box.leftCol, bottom: box.bottomRow, right: box.rightCol}}></div>
			</div>
		</div>
	)
}

export default FaceRecognition;