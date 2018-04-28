import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';
import Album from './new_album';
import axios from 'axios';
import '../App.css';
import ArtistList from './list_artists';

const list = 'https://musicbrainz.org/ws/2/release/?query=date:2018&limit=5&method=advanced&fmt=json';
const fadeInUpAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
    animation: 1s ${fadeInUpAnimation};
`


//To use data, that lies in state in our App component, we use 'props' argument in our function here.
class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {albums: []};

        axios.get(list)
        .then((response) => {
          this.setState({albums: response.data.releases})
        });
    }   
        render() {
            return(
                <div>
                <ul className="list list-inline col-md-12 albumList">
                <div className="col-md-12">New albums</div>
                
                    {this.state.albums.map((album) =>{ return <Album key={album.id} album={album} /> })}
                
                </ul>
                <ArtistList/>
                </div>
            )
        }
        
    }


export default AlbumList;