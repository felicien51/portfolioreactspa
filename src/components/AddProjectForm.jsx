import React, { useState } from 'react';
import './AddProjectForm.css';

function AddProjectForm(props) {
 
const [title, setTitle]           = useState('')
const [description, setDescription] = useState('')
const [category, setCategory]     = useState('')
const [year, setYear]             = useState('2025')
const [link, setLink]             = useState('')
const [error, setError]           = useState('')

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description || !category) {
      setError('Please fill in all required fields.');
      return;
    }

    props.onSubmit({
      title: title,
      description: description,
      category: category,
      year: year,
      link: link,
    });
  }

  return (
    <div className="form-box">
      <h2>Add New Project</h2>

      {error && <p className="form-error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>Title *</label>
        <input
          type="text"
          value={title}
          onChange={function (e) { setTitle(e.target.value); }}
          placeholder="Project title"
        />

        <label>Description *</label>
        <textarea
          value={description}
          onChange={function (e) { setDescription(e.target.value); }}
          placeholder="Short description of the project"
          rows="3"
        />

        <label>Category *</label>
        <select value={category} onChange={function (e) { setCategory(e.target.value); }}>
          <option value="">-- Select a category --</option>
          <option value="Web Design">Web Design</option>
          <option value="App Design">App Design</option>
          <option value="Branding">Branding</option>
          <option value="Photography">Photography</option>
          <option value="Other">Other</option>
        </select>

        <label>Year</label>
        <input
          type="number"
          value={year}
          onChange={function (e) { setYear(e.target.value); }}
          min="2000"
          max="2030"
        />

        <label>Project Link (optional)</label>
        <input
          type="url"
          value={link}
          onChange={function (e) { setLink(e.target.value); }}
          placeholder="https://example.com"
        />

        <div className="form-buttons">
          <button type="submit" className="btn-submit">Add Project</button>
          <button type="button" className="btn-cancel" onClick={props.onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddProjectForm;
