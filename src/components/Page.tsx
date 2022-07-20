import { useEffect, useState, CSSProperties } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import { PageWrapper } from './Page.styled';
import { useTheme } from '../hooks/useTheme';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Info from './Info/Info';
import { themeModes } from '../enums/themeModes';

const Page = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [opacityValue, setOpacityValue] = useState<number>(0);
	const [loaderOpacityValue, setLoaderOpacityValue] = useState<number>(0);

	const { currentTheme } = useTheme();

	useEffect(() => {
		setLoaderOpacityValue(1);
		setTimeout(() => {
			setIsLoading(false);
			setLoaderOpacityValue(0);
		}, 2000);
	}, []);

	useEffect(() => {
		if (!isLoading) {
			setOpacityValue(1);
		}
	}, [isLoading]);

	const loaderStyles: CSSProperties = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		transition: '0.3s opacity ease-in',
		opacity: loaderOpacityValue,
	};

	return (
		<PageWrapper currentTheme={currentTheme}>
			{isLoading ? (
				<ClimbingBoxLoader
					color={currentTheme === themeModes.dark ? '#faf8ff' : 'hsl(209, 61%, 16%)'}
					loading={isLoading}
					cssOverride={loaderStyles}
				/>
			) : (
				<div style={{ transition: '0.3s opacity ease-out', opacity: opacityValue }}>
					<Navbar />
					<Home />
					<Info />
				</div>
			)}
		</PageWrapper>
	);
};

export default Page;
