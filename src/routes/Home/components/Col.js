import React from 'react';
import { Link } from 'react-router';

const Col = ({header, imgSrc, paragraph, linkText, link}) => (
	<div className='col'>
		<h3>{ header }</h3>
		<div className='cropImg'>
			<img src={imgSrc} />
		</div>
		<p>{ paragraph }</p>
		<button><Link to={link}>{linkText}</Link></button>
	</div>
)

export default Col;