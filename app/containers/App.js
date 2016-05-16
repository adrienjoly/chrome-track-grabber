import React, { Component, PropTypes } from 'react';
import style from './App.css';

function searchTrack(name, callback) {
  var url = 'https://api.spotify.com/v1/search?type=track&limit=1&q=' + encodeURIComponent(name);
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      callback(null, JSON.parse(xhr.responseText).tracks.items[0]);
    }
  };
  xhr.send();  
}

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    var title = props.tab.title.replace(' - YouTube', '');
    this.state = {
      status: 'Searching for ' + title + ' ...',
      href: null,
      title: null
    };
    // search for track on spotify => update UI
    searchTrack(title, (err, res) => {
      console.log('spotify result:', res);
      this.setState({
        status: res ? 'Found track:' : 'Sorry, not found... :-(',
        href: res && res.external_urls.spotify,
        title: res && res.name
      });
    });
  }

  render() {
    return (
      <p>{this.state.status}&nbsp;<a target="_blank" href={this.state.href}>{this.state.title}</a></p>
    );
  }
}
