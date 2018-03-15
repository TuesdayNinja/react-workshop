import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
	box-shadow: 3px black;
	padding: 100 px;
	max-width: 80 px;
`;

const Image = styled.img`
	max-width: 70%;
`

const Title = styled.h1`
	color: red;
	font-size: 2 em;
	padding-bottom: 2 em;
`

export default class Card extends React.Component {
	render() {
		return (
			<CardWrapper>
				<Title>{this.props.title}</Title>
				<Image src={this.props.imageUrl}/>
			</CardWrapper>
		)
	}
}