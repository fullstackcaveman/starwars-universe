import styled from 'styled-components';

export const CharacterWrapper = styled.div`
	display: relative;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
	align-items: center;
	width: 500px;
	height: 30px;
	padding: 5px 10px;
	border: 1px solid ${(props) => props.theme.fontColor};
	border-radius: 5px;
	margin-bottom: 5px;
	background: linear-gradient(
		to bottom,
		rgba(246, 230, 180, 1) 0%,
		rgba(234, 129, 0, 1) 100%
	);
	color: ${(props) => props.theme.fontColor};
	letter-spacing: 0.12rem;

	&.expand {
		height: 260px;
	}

	& .container {
		position: relative;
		height: 29px;
	}

	.flex {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: space-between;

		&.hidden {
			display: none;
		}

		.row {
			display: flex;
			justify-content: space-around;
			height: 100%;
			width: 100%;
			/* justify-content: space-between; */
			.image {
				visibility: visible;
				height: 200px;
				background-image: url('../images/placeholder.jpg') no-repeat center
					center/cover;
				margin-top: 20px;
				margin-left: 20px;
				margin-right: 70px;
				border-radius: 10px;
			}

			.info {
				display: flex;
				flex-direction: column;
				height: 90%;
				margin-top: 20px;

				p {
					margin: 10px auto;
				}
			}
		}
	}
`;

export const H2 = styled.h2`
	position: absolute;
	margin: 0;
`;

export const Button = styled.button`
	position: absolute;
	top: 6px;
	right: 0;
	padding: 2px 8px;
	background-color: ${(props) => props.theme.fontColor};
	color: white;
	border: none;
	border-radius: 3px;
	cursor: pointer;

	&:focus {
		outline: none;
	}
`;
