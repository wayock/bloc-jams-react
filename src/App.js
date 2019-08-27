import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="navbar">
            <Link className="nav-links" to='/'>Home</Link>
            <Link className="nav-links" to='/library'>Library</Link>
          </nav>
        </header>
        <main className="container">
          <h1>Bloc Jams</h1>
          <div className="container">
            <Route exact path="/" component={Landing} />
          </div>
          <div class="container">
            <Route path="/library" component={Library} />
          </div>
          <div class="container">
            <Route path="/album/:slug" component={Album} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
