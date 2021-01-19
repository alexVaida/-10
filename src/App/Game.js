import React, { Component } from 'react'
import GameBoard from './Board'

export default class Game extends Component {
	render() {
		return <div className="game">
			<div style={{ fontSize: "20px" }}><strong>X, 0 Game</strong></div>
			<hr />
			<GameBoard />
		</div>
	}
}