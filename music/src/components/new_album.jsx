import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import image_not_found from '../Image-not-found.gif';
import loadingImage from '../gear-animation-green.gif';





// const albumTitle = props.title;
// const trackCount = props['track-count'];
// const releaseDate = props.date;
// const releaseID = props.id;
// const thumbnailUrl = `coverartarchive.org/release/${releaseID}/front`
// var imageUrl = ''
// var songsLength = 0;

class Album extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {title: props.album.title, trackCount: props.album['track-count'], releaseID:props.album.id, imageUrl:'', fetched:false};

        axios.get(`http://coverartarchive.org/release/${this.state.releaseID}/front`)
        .then((albumCover)=>{
        console.log(albumCover);
          this.setState({imageUrl:albumCover.thumbnails[500]})
          this.setState({fetched:true})
        })
        .catch((error)=>{
            this.setState({imageUrl:image_not_found})
            this.setState({fetched:true})
        })
    }
    
//         axios.get(`http://musicbrainz.org/ws/2/release/${releaseID}?inc=artist-credits+labels+discids+recordings&fmt=json`)
//         .then((albumDetails)=>{
//         console.log(albumDetails);
//             for (var i = 0;i<albumDetails.data.media.length;i++){
//                 songsLength +=  albumDetails.data.media[0].tracks[i]['length'];
//             }
// }),



render() {
    if (this.state.fetched == true) {
        return( 
            <div className="list-inline-item">
                    <li><Link to={`/album/${this.state.releaseID}`}><img id="thumbnail" src={this.state.imageUrl} /></Link></li>
                    <li >{this.state.title}</li>
                    <li >{this.state.trackCount} tracks</li>
            </div>
        )
    } else {
        return (
            <img id="loadingImage" src={loadingImage} />
        )
    }
    
}
}
// class Album extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {album: '', songs: '',length: '',genre:'',image: thumbnail};
//     }
//     getData = () => {
       
//         axios.get('http://musicbrainz.org/ws/2/release/7d166a44-cfb5-4b08-aacb-6863bbe677d6?inc=artist-credits+labels+discids+recordings&fmt=json')
//         .then((response)=>{
//             var name = response.data.title;
//             var songs_count = response.data.media[0]['track-count'];
//             var songs_length = 0;
//             for (var i = 0;i<response.data.media[0].tracks.length;i++) {
//                 songs_length += response.data.media[0].tracks[i].length;
//             }
//             songs_length = Math.floor(songs_length/60000);
//             console.log(response);
//             this.setState({album: name,songs: songs_count, length: songs_length});
//         })
    
//   };

//     render() {
//         return(
//             <div className="albumComponent" onLoad={this.getData}>
//                 <img src={this.state.image}/>
//                 <div >{this.state.album}</div>
//                 <span>{this.state.songs} tracks - </span>
//                 <span>{this.state.length} min.</span>
//                 <div>Genre</div>
//                 <button onClick={this.getData}>Get Data!</button>
//             </div>
//         )
//     }
// }

export default Album;