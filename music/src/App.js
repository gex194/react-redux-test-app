import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions/albumsData';

import Routes from './routes';
import './App.css';



import logo from './logo.svg';
import Login from './components/login_header';
import MenuHeader from './components/menu_header';
import ArtistAlbum from './components/list_artists';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {fetched: false};
  }
  componentWillMount () {
    this.props.dispatch(fetchData())
    this.setState({fetched: true})
  }
  fetchData () {
    this.props.dispatch(fetchData())
  }
  

  render() {
    if (this.state.fetched === false && this.props.albumsID === undefined) {
      return <div>LOADING</div>
    } else if(this.state.fetched === true) {
      return ( 
        <div className="App">
        <header className="App-header">
          <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
          <input className="searchHeader" placeholder="SEARCH"></input>
          <MenuHeader />
          <Login />
        </header>
        <Routes />
        
      </div>
      )
    }
  }
}

function mapStateToProps (store) {
  if (store.music.data === undefined) {
    return {}
  } else {
    return {
      albumsID: store.music.data[0].id,
      albumsTitle: store.music.data[0].title
    }
  }
 
}



export default connect(mapStateToProps)(App);
