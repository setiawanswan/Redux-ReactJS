import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { titile: 'No Scrub', duration: '4:05'},
        { titile: 'Macarena', duration: '2:30'},
        { titile: 'All star', duration: '3:15'},
        { titile: 'I want it that way', duration: '1:45'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})