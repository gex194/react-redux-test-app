import React from 'react';
import axios from 'axios';
import styled, {keyframes} from 'styled-components';
import {fadeInUp} from 'react-animations';
import Artist from './artist';

const MX_API_KEY = 	'63241ebf31f9cca26a171f3851355bb6';

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const FadeInDiv = styled.div`
    animation: 1s ${fadeInUpAnimation};
`

 const ArtistAlbum = () => { 
        return(
            <ul className="list list-inline col-md-12 albumList">
                <div className="col-md-12">Popular Artists</div>
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            <Artist />
            </ul>
        )
}

export default ArtistAlbum;