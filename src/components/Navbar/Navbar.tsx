import React from 'react';
import { NavbarWrapper, ListWrapper } from './Navbar.styled';

const Navbar = () => {
	return (
		<NavbarWrapper>
			<span>dawid_grabowski</span>
			<ListWrapper>
				<li>
					<a href='#home'>home</a>
				</li>
				<li>
					<a href='#info'>info</a>
				</li>
				<li>
					<a href='#contact'>contact</a>
				</li>
			</ListWrapper>
		</NavbarWrapper>
	);
};

export default Navbar;
