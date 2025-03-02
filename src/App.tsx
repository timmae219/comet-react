import React, { useEffect } from 'react';
import './App.css';
import CometHeader from './components/header/CometHeader/CometHeader';
import CometBody from './components/body/CometBody';
import { useGetPopularPostsQuery } from './api/postsApi';


function App(): JSX.Element {

  const { data: popularPostsData, error, isLoading } = useGetPopularPostsQuery({});

  useEffect(() => {
    console.log(popularPostsData, error, isLoading);
  }, [popularPostsData, error, isLoading]);
  
  return (
    <div className="App">
      <CometHeader />
      <CometBody />
    </div>
  );
}

export default App;