import React, {Component} from 'react';
import '../App.css';
import playHover from '../playSmall.svg';

class Track extends Component {
    render() {
        console.log(this.props)
        return(
            <li id="track" className="list-group-item"><img id="playHoverButton" src={playHover} />{this.props.track.title}</li>
       )
    }
    
}

export default Track;