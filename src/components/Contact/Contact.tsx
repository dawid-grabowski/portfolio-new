import { useTheme } from '../../hooks/useTheme';
import { ContactWrapper } from './Contact.styled';

const Contact = () => {
	const { currentTheme } = useTheme();

	return (
		<ContactWrapper currentTheme={currentTheme}>
			<div className='square-content'>
				<h1>contact me</h1>
				<a href='mailto:kontakt@grabowskidawid.com' title='click to mail me'>kontakt@grabowskidawid.com</a>
				<a href='tel:885344804' title='click to call me'>(+48) 885-344-804</a>
			</div>
			<div className='square'></div>
			<div className='inner-square'></div>
			<div className='line'></div>
			<div className='line-square'></div>
		</ContactWrapper>
	);
};

export default Contact;
