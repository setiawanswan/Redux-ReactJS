// Action creator
export const selectSong = song => {
    // Return in action
    return{
        type: 'SONG_SELECTED',
        payload: song
    };
};
