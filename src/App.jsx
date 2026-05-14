import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import ProjectList from './components/ProjectList';
import AddProjectForm from './components/AddProjectForm';
import Footer from './components/Footer';
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
  const [projects, setProjects]       = useState(initialProjects);
  const [searchText, setSearchText]   = useState('');
  const [showForm, setShowForm]       = useState(false);
  const [activeCategory, setCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = [...new Set(projects.map(p => p.category))];
    return ['All', ...cats];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const q = searchText.toLowerCase();
    return projects.filter(project => {
      const matchesSearch =
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q);
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [projects, searchText, activeCategory]);

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

  function handleDeleteProject(id) {
    setProjects(projects.filter(function(p) { return p.id !== id; }));
  }

  return (
    <div className="app">
      <Navbar
        onAddClick={function () { setShowForm(!showForm); }}
        showForm={showForm}
        projectCount={projects.length}
      />

      <Hero />

      <div className="container">
        <SearchBar searchText={searchText} onSearch={setSearchText} />

        <FilterBar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setCategory}
        />

        {showForm && (
          <AddProjectForm
            onSubmit={handleAddProject}
            onCancel={function () { setShowForm(false); }}
          />
        )}

        <p className="result-count">{filteredProjects.length} project(s) found</p>

        {(searchText || activeCategory !== 'All') && (
          <button className="btn-clear" onClick={function() { setSearchText(''); setCategory('All'); }}>
            Clear filters
          </button>
        )}

        <ProjectList projects={filteredProjects} onDelete={handleDeleteProject} />
      </div>

      <Footer />
    </div>
  );
}

export default App;