import React, { Component } from 'react';
import './Album.css';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      volume: 0.6,
      isPlaying: false
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

    play() {
      this.audioElement.play();
      this.setState({ isPlaying: true });
    }

    pause() {
      this.audioElement.pause();
      this.setState({ isPlaying: false });
    }

    componentDidMount() {
       this.eventListeners = {
         timeupdate: e => {
           this.setState({ currentTime: this.audioElement.currentTime });
         },
         durationchange: e => {
           this.setState({ duration: this.audioElement.duration });
         }
       };
       this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
       this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
     }

   componentWillUnmount() {
     this.audioElement.src = null;
     this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
     this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
   }

   adjustVolume() {
     this.eventListeners = {
       volumechange: e => {
         this.setState({ volume: this.audioElement.volume });
       },
    //this.audioElement.addEventListener('volumechange', this.eventListeners.volume);
     }
   }

    setSong(song) {
      this.audioElement.src = song.audioSrc;
      this.setState({ currentSong: song });
    }

    handleSongClick(song) {
      const isSameSong = this.state.currentSong === song;
      if (this.state.isPlaying && isSameSong) {
        this.pause();
      } else {
        if (!isSameSong) { this.setSong(song); }
        this.play();
      }
    }

    setOnHover(index) {
      this.setState({ onHover: index });  //which song?
    }

    playPauseIcons(song, index){
        if (index === this.state.onHover) {
          return <span className="ion-play"><ion-icon name="play"></ion-icon></span>
      } else if (song === this.state.currentSong && this.state.isPlaying) {
        return <span className="ion-pause"><ion-icon name="pause"></ion-icon></span>;
      } else {
        return index + 1;
      }
    }

    formatTime(time) {
      const minutes = Math.floor(time / 60)
      const seconds = Math.floor(time % 60)
      if(time === isNaN){
        return "-:--";
      } else if (time < 10){
        return `${minutes}:0${seconds}`;
      } else {
        return `${minutes}:${seconds}`;
        }
    }

    handlePrevClick() {
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.max(0, currentIndex - 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play();
    }

    handleNextClick() {
      const highestIndex =this.state.album.songs.length
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.min(highestIndex - 1, currentIndex + 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play();
    }

    handleTimeChange(e) {
      const newTime = this.audioElement.duration * e.target.value;
      this.audioElement.currentTime = newTime;
      this.setState({ currentTime: newTime });
    }

    handleVolumeChange(e) {
     const newVolume = e.target.value;
     this.audioElement.volume = newVolume;
     this.setState({ volume: newVolume });
   }


  render() {
    return (
      <section className="album">
        <div className="flex-container">
          <div className="row">
            <section id="album-info">
              <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
              <div className="album-details">
                <h1 id="album-title">{this.state.album.title}</h1>
                <h2 className="artist">{this.state.album.artist}</h2>
                <div id="release-info">{this.state.album.releaseInfo}</div>
              </div>
            </section>
          </div>
        </div>
        <div className="container">
          <div className="flex-row">
            <div className="col-sm">
              <table id="song-list">
                <colgroup>
                  <col id="song-number-column" />
                  <col id="song-title-column" />
                  <col id="song-duration-column" />
                </colgroup>
                <tbody>
                  {this.state.album.songs.map( (song, index) =>
                  <tr className="song" key={index} onClick={() => this.handleSongClick(song)} onMouseEnter={() => this.setOnHover(index)} onMouseLeave={() => this.setOnHover(null)} >
                    <td className="song-actions">
                      <button>
                          <span className="song-number">{this.playPauseIcons(song, index)}</span>
                      </button>
                    </td>
                    <td>{song.title}</td>
                    <td>{this.formatTime(song.duration)}</td>
                  </tr>
                )}
                </tbody>
              </table>
            </div>
            <div className="col-sm">
              <PlayerBar
                isPlaying={this.state.isPlaying}
                currentSong={this.state.currentSong}
                currentTime={this.formatTime(this.audioElement.currentTime)}
                duration={this.formatTime(this.audioElement.duration)}
                volume={this.audioElement.volume}
                handleSongClick={() => this.handleSongClick(this.state.currentSong)}
                handlePrevClick={() => this.handlePrevClick()}
                handleNextClick={() => this.handleNextClick()}
                handleTimeChange={(e) => this.handleTimeChange(e)}
                handleVolumeChange={(e) => this.handleVolumeChange(e)}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Album;
