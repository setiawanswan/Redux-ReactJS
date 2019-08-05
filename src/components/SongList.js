import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectSong } from '../actions';

class SongList extends Component {
    renderList(){
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                        Selected
                        </button>
                    </div>
                    <div className="conten">{song.title}</div>
                </div>
            )
        })
    }

    render(){
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToPorps = state => {
    console.log(state)

    return state;
}



export default connect(mapStateToPorps, {selectSong})(SongList);