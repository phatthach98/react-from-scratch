/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('App tests', () => {
	it('should contains the heading 1', () => {
		render(<App />);
		const heading = screen.getByText('Hello World, React From Scratch');
		expect(heading).toBeInTheDocument();
	});
	it('should contains the heading 2', () => {
		render(<App />);
		const heading = screen.getByText('Hello World, React From Scratch');
		expect(heading).toBeDefined();
	});
});
