import styled from 'styled-components';

export const CharactersWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const NavigationWrapper = styled.div`
	display: flex;
`;

export const Button = styled.button`
	padding: 2px 8px;
	background-color: ${(props) => props.theme.fontColor};
	color: white;
	border: none;
	border-radius: 3px;
	margin: 0 10px;
	cursor: pointer;

	&:focus {
		outline: none;
	}
`;
