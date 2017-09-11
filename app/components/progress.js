import React from 'react'
import './progress.less'

let Progress = React.createClass({
	getDefaultProps() {
		return {
			barColor: '#2f9842'
		}
	},

	changeProgress(e) {
		let progressbar = this.refs.progressbar;
		//console.log(e.clientX+'-'+progressbar.getBoundingClientRect().left+"-"+progressbar.clientWidth);
		let progress = (e.clientX - progressbar.getBoundingClientRect().left)/ progressbar.clientWidth;
		console.log(progress);
		this.props.onProgressChange && this.props.onProgressChange(progress);
	},

	render() {
		return (
			<div className="component-progress" ref="progressbar" onClick={this.changeProgress}>
				<div className="progress" style={{ width: `${this.props.progress}%`,
				 backgroundColor: `${this.props.barColor}` }}></div>
			</div>
		);
	}
});

export default Progress;