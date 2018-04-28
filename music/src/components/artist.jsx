import React,{Component} from 'react';
import artistDefaultImage from '../artist_avatar.png';

class Artist extends Component {
    render(){
        return(
           <div className="list-inline-item">
                <li><img id="thumbnail" src={artistDefaultImage} /></li>
                <li>Artist Name</li>
                <li>Raiting: 1 / 100</li>
        </div>
        )
    }
}

export default Artist;