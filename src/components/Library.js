import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Library.css';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className='library'>
        {
          this.state.albums.map( (album, index) =>
            <Link to={`/album/${album.slug}`} key={index}>
              <div className="flex-container">
                <div className="flex-row">
                  <img className="col-sm" src={album.albumCover} alt={album.title} />
                    <div>{album.title}</div>
                    <div>{album.artist}</div>
                    <div>{album.songs.length} songs</div>
                </div>
              </div>
            </Link>
        )
        }
      </section>
    );
  }
}

export default Library;
