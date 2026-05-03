import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import AddProjectForm from './components/AddProjectForm';
import './App.css';

var initialProjects = [
  {
    id: 1,
    title: 'Coffee Shop Website',
    description: 'A simple website for a local coffee shop with a menu and contact page.',
    category: 'Web Design',
    year: '2024',
    link: 'https://example.com/coffee-shop',
  },
  {
    id: 2,
    title: 'Fitness App UI',
    description: 'Mobile app design for tracking daily workouts and fitness goals.',
    category: 'App Design',
    year: '2024',
    link: 'https://example.com/fitness-app',
  },
  {
    id: 3,
    title: 'Brand Logo Pack',
    description: 'Logo and branding kit created for a small clothing startup.',
    category: 'Branding',
    year: '2023',
    link: 'https://example.com/logo-pack',
  },
  {
    id: 4,
    title: 'Photography Portfolio',
    description: 'Clean portfolio site built for a freelance photographer.',
    category: 'Web Design',
    year: '2023',
    link: 'https://example.com/photography',
  },
];

function App() {
  var projectState = useState(initialProjects);
  var projects = projectState[0];
  var setProjects = projectState[1];

  var searchState = useState('');
  var searchText = searchState[0];
  var setSearchText = searchState[1];

  var formState = useState(false);
  var showForm = formState[0];
  var setShowForm = formState[1];

  var filteredProjects = projects.filter(function (project) {
    var q = searchText.toLowerCase();
    return (
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.category.toLowerCase().includes(q)
    );
  });

  function handleAddProject(newProject) {
    var projectWithId = {
      id: projects.length + 1,
      title: newProject.title,
      description: newProject.description,
      category: newProject.category,
      year: newProject.year,
      link: newProject.link,
    };
    setProjects([projectWithId].concat(projects));
    setShowForm(false);
  }

  return (
    <div className="app">
      <Navbar onAddClick={function () { setShowForm(!showForm); }} />

      <div className="hero">
        <h1>Creative Project Showcase</h1>
        <p>Browse our work and add your own projects below.</p>
      </div>

      <div className="container">
        <SearchBar searchText={searchText} onSearch={setSearchText} />

        {showForm && (
          <AddProjectForm
            onSubmit={handleAddProject}
            onCancel={function () { setShowForm(false); }}
          />
        )}

        <p className="result-count">{filteredProjects.length} project(s) found</p>

        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
}

export default App;
