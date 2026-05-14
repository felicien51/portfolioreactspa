# Portfolio Showcase (JSX)

A beginner React SPA for showcasing creative projects.

 PROJECT LINK : https://portfolioreactspaa.vercel.app/


```bash
npm test
```

## Features
- View projects on the landing page
- Search / filter projects in real time
- Add new projects with a form (with validation)
- Project links shown on each card (responsive)
- Responsive grid layout

## File Structure

```
src/
  App.jsx
  App.css
  index.jsx
  components/
    Navbar.jsx / Navbar.css
    SearchBar.jsx / SearchBar.css
    ProjectList.jsx / ProjectList.css
    ProjectCard.jsx / ProjectCard.css
    AddProjectForm.jsx / AddProjectForm.css
  __tests__/
    App.test.jsx
```
#error 
Incase of this error in windows
Error: error:0308010C:digital envelope routines::unsupported

run this 
set NODE_OPTIONS=--openssl-legacy-provider
