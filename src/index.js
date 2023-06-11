import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Projectnav from './projectpage/Projectnav';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ProjectLanding from './projectpage/ProjectLanding';
import Projecthome from './projectpage/Projecthome';
import Projectform from './projectpage/Projectform';
import Project404 from './projectpage/Project404';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Projectnav/>
      <Routes>
        <Route path='' element={<ProjectLanding/>}/>
        <Route path='home' element={<Projecthome/>}/>
        <Route path='forms' element={<Projectform/>}/>
        <Route path='*' element={<Project404/>}/>
      </Routes>
    
    
    </BrowserRouter>

  </React.StrictMode>
 
);

