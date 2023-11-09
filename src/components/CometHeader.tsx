import React from 'react';
import './CometHeader.css';

export default function CometHeader (): JSX.Element {
    return (<header className="App-header" data-testid="comet-header">
    <div>
      <img id='comet-header-logo' src={require('../assets/images/comet_logo.png')} alt='Comet App logo'></img>
    </div>
  </header>);
}