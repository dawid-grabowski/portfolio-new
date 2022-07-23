import { useTheme } from '../../hooks/useTheme';
import { FooterWrapper } from './Footer.styled';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
	const { currentTheme } = useTheme();
	return (
		<FooterWrapper currentTheme={currentTheme}>
			<div>
				<p>
					<a
						href='https://www.linkedin.com/in/grabowskidawid/'
						target='_blank'
						rel='noreferrer'
						title='Click to visit my linkedIn'>
						<FaLinkedin />
					</a>
					&nbsp;
					<a
							href='https://github.com/dawid-grabowski'
							target='_blank'
							rel='noreferrer'
							title='Click to visit my github'>
							<FaGithub />
						</a>
				</p>
			</div>
			<p>&copy; 2022 Dawid Grabowski. All rights reserved.</p>
		</FooterWrapper>
	);
};

export default Footer;
