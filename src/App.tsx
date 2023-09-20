import React, { ReactElement } from 'react';
import './App.css';
import CometHeader from './components/CometHeader';

function App(): ReactElement {
  // TODO: write test for header (App Component and Header Component)
  return (
    <div className="App">
      <CometHeader />
    </div>
  );
}

export default App;
