export default function musicReducer(state={
    fetching: false,
    fetched: false,
    albums: [],
    albumsIDs: [],
    error: null
},action) {
    switch (action.type) {
        case "FETCH_DATA_START": {
            return {...state, fetching: true}
            
        }
        case "FETCH_DATA_ERROR": {
            return {...state, fetching: false, error:action.payload}
            
        }
        case "FETCH_DATA_FULFILLED": {
            return {...state, fetching: false, fetched:true, albums: action.payload}
        }
        case "ALBUMS_IDs": {
            return{...state, fetching: false, fetched:true, albumsIDs: action.payload}
        }
        default : {
            return { albums: action.payload}
        }

    }
    return state
}


