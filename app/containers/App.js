import React, { Component, PropTypes } from 'react';
import style from './App.css';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { title: props.tab.title || '(no title)' };

    // ask track to spotify api
    var url = 'https://api.spotify.com/v1/search?type=track&limit=1&q=' + encodeURIComponent(props.tab.title.replace(' - YouTube', ''));
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        var results = JSON.parse(xhr.responseText).tracks.items;
        console.log('spotify results:', results);
        this.setState({
          title: results.length ? results[0].name : '(no result)'
        });
      }
    }
    xhr.send();
  }

  render() {
    return (
      <p>{this.state.title}</p>
    );
  }
}
