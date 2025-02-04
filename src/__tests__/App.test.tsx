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

  it('Has posts in state', () => {
    global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () =>
        Promise.resolve({
          data: {
            children: [
              {
                data: {
                  title: "Test Post",
                  author: "user",
                  subreddit_name_prefixed: "r/test",
                  selftext_html: "Test content",
                  preview: { images: [{ source: { url: "http://example.com/image.jpg" } }] },
                  ups: 10,
                },
              },
            ],
          },
        }),
    } as Response)
  );

     render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(store.getState().posts).toHaveLength(1);  // TODO: Debug correct prop names
  });
});