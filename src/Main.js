import React from 'react';
import './styles/main.css';
import 'yet-another-react-lightbox/dist/styles.css'
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import { useLayoutEffect } from "react";
import myData from './pagesData';
import Root from './components/root';
import Home from './pages/home';
import BioJorge from './pages/bioJorge';
import BioRoser from './pages/bioRoser';
import Project from './pages/project';
import Error from './pages/error';

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};

function Main() {
  

  return (
    <BrowserRouter>
    <Wrapper>
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
      </Wrapper>
    </BrowserRouter>
    
  );
}

export default Main;
