import React, { Component } from 'react';
import { render } from 'react-dom';

class InjectApp extends Component {
  constructor(props) {
    super(props);
    console.log('INJECT', chrome.extension.getURL('inject.html'));
  }
  render() {
    return (
      <div>
        <button onClick='alert("coucou")'>Coucou?</button>
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const injectDOM = document.createElement('div');
  injectDOM.className = 'inject-react-example';
  injectDOM.style.textAlign = 'center';
  document.body.appendChild(injectDOM);
  render(<InjectApp />, injectDOM);
});
