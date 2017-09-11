import React from 'react';
import './musiclistitem.less';

let MusicListItem = React.createClass({
	
    render() {
    	let item = this.props.musicItem;
        return (
            <li className={`row components-listitem${this.props.focus ? ' focus' : ''}`} >
                <p><span className="bold">{item.title}</span>  -  {item.artist}</p>
                <p className="-col-auto delete"></p>
            </li>
        );
    }
});

export default MusicListItem;
