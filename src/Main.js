import React from 'react';
import './styles/main.css';
import 'yet-another-react-lightbox/dist/styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import myData from './pagesData';
import Root from './components/root';
import Home from './pages/home';
import BioJorge from './pages/bioJorge';
import BioRoser from './pages/bioRoser';
import Project from './pages/project';
import Error from './pages/error';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          {myData.map(({ pathNav, id }, index) => (
            <Route
              path={pathNav}
              key={index}
              element={<Project projectId={id} />}
            />
          ))}
          <Route path="bioJorge" element={<BioJorge />} />
          <Route path="bioRoser" element={<BioRoser />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
