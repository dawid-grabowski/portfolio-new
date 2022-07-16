import { useTheme } from '../../hooks/useTheme';
import { InfoWrapper } from './Info.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faContactCard } from '@fortawesome/free-regular-svg-icons';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Info = () => {
	const { currentTheme } = useTheme();
	return (
		<InfoWrapper currentTheme={currentTheme}>
			<div className='info__panel'>
				<h1>
					Find me there <FontAwesomeIcon icon={faContactCard} />
				</h1>
				<div>
					<p>
						<FaLinkedin /> -&nbsp;
						<a
							href='https://www.linkedin.com/in/grabowskidawid/'
							target='_blank'
							rel='noreferrer'
							title='Click to visit my linkedIn'>
							linkedIn
						</a>
					</p>
					<p>
						<FaGithub /> -&nbsp;
						<a
							href='https://github.com/dawid-grabowski'
							target='_blank'
							rel='noreferrer'
							title='Click to visit my github'>
							github
						</a>
					</p>
				</div>
			</div>
			<div className='info__separator'></div>
			<div className='info__panel'>
				<h1>
					My projects <FontAwesomeIcon icon={faPenToSquare} />
				</h1>
				<div>
					<p>
						Cat's hotel website -&nbsp;
						<a href='https://www.hotelmascotas.pl' target='_blank' rel='noreferrer' title='Click to visit the website'>
							www.hotelmascotas.pl
						</a>
					</p>
					<p>
						Snake game made with plain JavaScript -&nbsp;
						<a href='https://www.hotelmascotas.pl' target='_blank' rel='noreferrer' title='Click to play'>
							play
						</a>
					</p>
				</div>
			</div>
		</InfoWrapper>
	);
};

export default Info;
