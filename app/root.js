import React from 'react';
import Header from './components/header'
import Player from './page/player'
import MusicList from './page/MusicList'
import { MUSIC_LIST } from './config/musiclist'

let Root = React.createClass({
	getInitialState() {
		return {
			musicList : MUSIC_LIST,
			currentMusicItem: MUSIC_LIST[2]
		}
	},

	componentDidMount() {
		$('#player').jPlayer({
			ready: function() {
				$(this).jPlayer('setMedia', {
					mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
				}).jPlayer('play');
			},
			supplied: 'mp3',
			wmode: 'window'
		});
	},

	componentWillUnMount() {
	},

	render() {
		return (
			<div>
				<Header />
				<MusicList currentMusicItem={ this.state.currentMusicItem } musicList={ this.state.musicList } ></MusicList>
			</div>
		);
	}
});

export default Root;