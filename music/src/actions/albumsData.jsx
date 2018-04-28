import axios from 'axios';

export function fetchData () {
    return function (dispatch) {
        var albumData = [];
        var releaseID = [];
            dispatch({type: "FETCH_DATA_START"})
            axios.get("https://musicbrainz.org/ws/2/release/?query=date:2018&limit=5&method=advanced&fmt=json")
            .then((response)=>{
                for (var i = 0; i<response.data.releases.length;i++) {
                    releaseID[i] = response.data.releases[i].id;
                    albumData[i] = {id:response.data.releases[i].id, title:response.data.releases[i].title,trackcount:response.data.releases[i]['track-count']};
                }
                dispatch({type: "FETCH_DATA_FULFILLED", payload: albumData})
                dispatch({type: "ALBUMS_IDs", payload: releaseID})
            })
    }
}
