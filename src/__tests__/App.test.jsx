import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('renders the logo', function () {
  render(<App />);
  expect(screen.getByText('MyPortfolio')).toBeInTheDocument();
});

test('renders the hero heading', function () {
  render(<App />);
  expect(screen.getByText('Creative Project Showcase')).toBeInTheDocument();
});

test('renders starter projects', function () {
  render(<App />);
  expect(screen.getByText('Coffee Shop Website')).toBeInTheDocument();
  expect(screen.getByText('Fitness App UI')).toBeInTheDocument();
});

test('renders the search input', function () {
  render(<App />);
  expect(screen.getByPlaceholderText(/search by title/i)).toBeInTheDocument();
});

test('search filters projects by title', function () {
  render(<App />);
  var input = screen.getByPlaceholderText(/search by title/i);
  fireEvent.change(input, { target: { value: 'coffee' } });
  expect(screen.getByText('Coffee Shop Website')).toBeInTheDocument();
  expect(screen.queryByText('Fitness App UI')).not.toBeInTheDocument();
});

test('shows no results message when nothing matches', function () {
  render(<App />);
  var input = screen.getByPlaceholderText(/search by title/i);
  fireEvent.change(input, { target: { value: 'xyzxyzxyz' } });
  expect(screen.getByText(/no projects found/i)).toBeInTheDocument();
});

test('form appears when Add Project is clicked', function () {
  render(<App />);
  fireEvent.click(screen.getByText('+ Add Project'));
  expect(screen.getByText('Add New Project')).toBeInTheDocument();
});

test('form shows error when submitted empty', function () {
  render(<App />);
  fireEvent.click(screen.getByText('+ Add Project'));
  fireEvent.click(screen.getByText('Add Project'));
  expect(screen.getByText(/please fill in all required fields/i)).toBeInTheDocument();
});

test('new project appears after being added', function () {
  render(<App />);
  fireEvent.click(screen.getByText('+ Add Project'));
  fireEvent.change(screen.getByPlaceholderText('Project title'), { target: { value: 'My Test Project' } });
  fireEvent.change(screen.getByPlaceholderText(/short description/i), { target: { value: 'A test description' } });
  fireEvent.change(screen.getByDisplayValue('-- Select a category --'), { target: { value: 'Web Design' } });
  fireEvent.click(screen.getByText('Add Project'));
  expect(screen.getByText('My Test Project')).toBeInTheDocument();
});

test('form closes after adding a project', function () {
  render(<App />);
  fireEvent.click(screen.getByText('+ Add Project'));
  fireEvent.change(screen.getByPlaceholderText('Project title'), { target: { value: 'Close Test' } });
  fireEvent.change(screen.getByPlaceholderText(/short description/i), { target: { value: 'Some description here' } });
  fireEvent.change(screen.getByDisplayValue('-- Select a category --'), { target: { value: 'Branding' } });
  fireEvent.click(screen.getByText('Add Project'));
  expect(screen.queryByText('Add New Project')).not.toBeInTheDocument();
});

test('cancel button hides the form', function () {
  render(<App />);
  fireEvent.click(screen.getByText('+ Add Project'));
  fireEvent.click(screen.getByText('Cancel'));
  expect(screen.queryByText('Add New Project')).not.toBeInTheDocument();
});

test('project link is shown on card', function () {
  render(<App />);
  var links = screen.getAllByText('View Project →');
  expect(links.length).toBeGreaterThan(0);
});
