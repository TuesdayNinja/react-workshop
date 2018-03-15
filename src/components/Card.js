import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
	box-shadow: 5px 10px 8px #888888;
	padding: 2em;
	width: 20em;
	height: 30em;
`;

const Image = styled.img`
	max-width: 100%;
`

const Title = styled.h1`
	
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