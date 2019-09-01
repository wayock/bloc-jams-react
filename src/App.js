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
        <header class="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
              <Link className="nav-links" to='/'>Home</Link>
              <Link className="nav-links" to='/library'>Library</Link>
            </div>
          </nav>
        </header>
        <main className="container">
          <section class="row centered-form center-block text-center">
            <div className="container d-flex flex-wrap align-items-center">
              <h1>Bloc Jams</h1>
            </div>
            <div className="container d-flex flex-wrap align-items-center">
              <Route exact path="/" component={Landing} />
            </div>
            <div class="container d-flex flex-wrap align-items-center">
              <Route path="/library" component={Library} />
            </div>
            <div class="container d-flex flex-wrap align-items-center">
              <Route path="/album/:slug" component={Album} />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
