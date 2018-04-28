import React, {Component} from 'react';
import axios from 'axios';
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';
import audiofile from '../julian-perretta-miracle.mp3'
import AudioPlayer from 'react-responsive-audio-player';

import '../audioplayer.css';

import albumCover from '../rectangle.png';
import playButton from '../play.svg';
import shareButton from '../share.svg';
import likeButton from '../like.svg';
import Track from './track';

const FadeInAnimation = keyframes `${fadeIn}`;
const FadeInSpan = styled.span `
animation: 1s ${FadeInAnimation}
`;

const AudioPlayerDiv = styled.div `
width: 100%;
position:fixed;
bottom:0px;
`

var playlist = [{url: audiofile, title: "Song1"}]



class AlbumPage extends Component {
    constructor(props) {
        super(props)
        this.state = {fetching: false, title: '',trackcount: '', tracklist: []}
    }
    componentDidMount() {
        const {match: {params}} = this.props;
        axios.get(`http://musicbrainz.org/ws/2/release/${params.id}?inc=artist-credits+labels+discids+recordings&fmt=json`)
        .then((response)=>{
            console.log(response.data.media[0].tracks);
            this.setState({title: response.data.title, trackcount: response.data.media["0"]['track-count'], tracklist: response.data.media['0']['tracks'] });
        })
    }
    
render() {
    if (this.state.fetching === true){
       return <div>Loading</div>
    } else {
        return (
            <div className="albumDetailsContainer col-md-12 ">
                <FadeInSpan>
                <img src={albumCover}/>
                <div className="albumDescription">When you enter into any new area of science, 
                    you almost always find yourself with a baffling new language of technical terms 
                    to learn before you can converse with the experts. This is certainly true in astronomy both 
                    </div>
            </FadeInSpan>
            
            
            <FadeInSpan>
                <p className="albumTitle">{this.state.title}</p>
                <p className="albumInfo">{this.state.trackcount} tracks - 42:23</p>
                <p className="albumGenre">Hip-Hop|Rap</p>
                <div><img id="playButton" src={playButton} /></div>
                <img id="shareButton" src={shareButton} />
                <img id="likeButton" src={likeButton} />
            </FadeInSpan>
           
            
            <FadeInSpan>
                <ol className="list-group tracklist">
                    {this.state.tracklist.map((track)=>{
                        return <Track key={track.id} track={track}/>
                    })}
                </ol>
            </FadeInSpan>
            <AudioPlayerDiv>
            <AudioPlayer playlist={playlist} />
            </AudioPlayerDiv>
            </div>
        )
    }
    
}

}


export default AlbumPage;