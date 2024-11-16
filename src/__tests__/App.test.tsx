import React from 'react';
import { render, RenderResult } from "@testing-library/react";
import App from '../App';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    posts: {
      posts: [],
      status: 'idle',
      error: null
    }
  }
});

describe('Root App Component Tests', () => {
  it('renders header correctly when rendering app component', () => {
    const { getByTestId }: RenderResult = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const cometHeader: HTMLElement = getByTestId('comet-header');

    expect(cometHeader).toBeInTheDocument();
  });
});