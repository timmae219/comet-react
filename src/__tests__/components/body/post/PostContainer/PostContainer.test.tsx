import React from 'react';
import { render, screen, act } from "@testing-library/react";
import PostContainer from '../../../../../components/body/post/PostContainer/PostContainer';
import '@testing-library/jest-dom';

describe('PostContainer Component Tests', () => {

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('displays loading state initially', () => {
    act(() => {
      render(<PostContainer />);
    });

    const containerElement = screen.getByRole('main', { hidden: true });
    expect(containerElement).toHaveClass("Post-container-loading");
    expect(containerElement).toBeEmptyDOMElement();
  });

  it('displays content after loading time elapses', () => {
    act(() => {
      render(<PostContainer />);
    });

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    const containerElement = screen.getByRole('main', { hidden: true });
    expect(containerElement).toHaveTextContent("Post Container Placeholder");
    expect(containerElement).toHaveClass("Post-container");
  });
});




