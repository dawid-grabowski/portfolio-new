import React from 'react';
import { PageWrapper } from './Page.styled';
import { useTheme } from '../hooks/ThemeContext';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

const Page = () => {
	const { currentTheme } = useTheme();

	return (
		<PageWrapper currentTheme={currentTheme}>
			<Navbar />
			<Home />
		</PageWrapper>
	);
};

export default Page;
