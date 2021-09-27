import React, { Component } from 'react';
import Bruh from "./music/Blue_World.mp3";
import "./music.css"
import {Howl, Howler} from 'howler';


const audioClips = [
    {sound: Bruh, label: "Bruh"}
]

class App extends Component {
    soundPlay = (src) => {
        const sound = new Howl ({
            src
        })
        sound.play();
    }

    RenderButtonAndSound = () => {
        return audioClips.map((soundObj, index) => {
            return(
                <div className="button">
                <button key={index} onClick={() => this.soundPlay(soundObj.sound)}>
                    Minha música Favorita
                </button>
                </div>
            )
        })
    }

    render() {
        Howler.volume(1.0)
        return <div className="App">
            {this.RenderButtonAndSound()}
        </div>;
    }
}

export default App;