import styled from 'styled-components';

export const NavbarWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: none;
	padding: 3rem 7rem;
	font-size: 1.6rem;

	span {
		cursor: default;
	}
`;

export const ListWrapper = styled.div`
	display: flex;
	list-style-type: none;

	li {
		margin-left: 2rem;

		a {
			text-decoration: none;
			color: #faf8ff;
		}

		a:hover {
			text-decoration: underline;
		}
	}
`;
