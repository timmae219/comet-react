import React, { ReactElement, useEffect } from 'react';
import './App.css';
import CometHeader from './components/header/CometHeader/CometHeader';
import CometBody from './components/body/CometBody';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './redux/reducers/posts';


function App(): ReactElement {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchPosts()); 
  }, [dispatch]);
  
  return (
    <div className="App">
      <CometHeader />
      <CometBody />
    </div>
  );
}

export default App;