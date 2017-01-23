import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
	<div className='header'>
		<navigation>
			<IndexLink to='/' activeClassName='route--active'>
				Home
			</IndexLink>
			<Link to='/counter' activeClassName='route--active'>
				Counter
			</Link>
		</navigation>
	</div>
)

export default Header
