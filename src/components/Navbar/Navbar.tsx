import React from 'react';
import { useTheme } from '../../hooks/ThemeContext';
import { NavbarWrapper, ListWrapper } from './Navbar.styled';

const Navbar = () => {
	const { currentTheme } = useTheme();

	return (
		<NavbarWrapper currentTheme={currentTheme}>
			<span>dawid_grabowski</span>
			<ListWrapper currentTheme={currentTheme}>
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
