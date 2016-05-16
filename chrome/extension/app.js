import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../app/containers/App';
import './app.css';

chrome.tabs.getSelected(null, function(tab) {
  console.log('TAB', tab);
  ReactDOM.render(
    <App tab={tab} />,
    document.querySelector('#root')
  );
});
