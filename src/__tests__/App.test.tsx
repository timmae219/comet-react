import React from 'react';
import { render, RenderResult } from "@testing-library/react";
import App from '../App';
import '@testing-library/jest-dom';

describe('Root App Component Tests', () => {
  it('renders header correctly when rendering app component', () => {

    const { getByTestId }: RenderResult = render(<App />);
    const cometHeader: HTMLElement = getByTestId('comet-header');

    expect(cometHeader).toBeInTheDocument();
  });
});
