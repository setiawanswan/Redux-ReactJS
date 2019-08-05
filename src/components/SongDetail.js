import React from 'react';
import { connect } from 'react-redux'; 

const SongDetail = ({song}) => {
    if (!song) {
        return <div>Select a Song</div>;
    }

    return(
        <div> 
            <h1>Detail Song : </h1>
            <p>
                {song.title}
                    <br/>
                {song.duration}
            </p>
        </div>
    ) 
};


const mapStateToProps = (state) => {
    return {song:  state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);