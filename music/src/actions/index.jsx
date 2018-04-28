import axios from 'axios';

 const loadData = () => {
    axios.get('https://musicbrainz.org/ws/2/release/?query=date:2018&limit=5&method=advanced&fmt=json')
    .then((response) => {
        return {
            type: "ALBUM_DATA",
            response
        }
    })
}

export default loadData;