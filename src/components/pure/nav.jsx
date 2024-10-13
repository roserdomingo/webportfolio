import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/nav.css';

import { pagesData as list } from '../../pagesData.js';

import { SECTION } from '../../models/project.enum';

import { pageId } from '../../pagesData.js';
import { PAGE_TITTLE, SOCIALMEDIA, EMAIL, BIO_PAGE,   } from '../../models/project.enum';

function linkStyle(active) {
  return active ? 'link-active' : 'link';
}


function Nav() {

  

  return (

    <nav className='nav flex-sm-column float-start pt-4 '>
      <h1 className='nav-title pb-4'>

      
       
      
        <NavLink to='/'>
       {pageId ? PAGE_TITTLE.ROSER : PAGE_TITTLE.JORGE}
       
       
        </NavLink>
      </h1>
      <ul>
        {list.filter(({ category }) => pageId ? category === SECTION.PROYECTOSROSER | category === SECTION.PROYECTOSAMBOS : category === SECTION.PROYECTOSJORGE | category === SECTION.PROYECTOSAMBOS )
          .sort((a, b) => b.id - a.id)
          .map(({ navTitle, pathNav }, index) => (
            <li className='nav-item align-top'
              key={index}>
              <NavLink to={pathNav}
                className={({ isActive }) => linkStyle(isActive).toString()}>
                {navTitle}
              </NavLink>
            </li>
          ))}
        <li className='nav-separator mt-2'>
          <>—</>
        </li>
       
        <li className='nav-item'>
          <NavLink to= {pageId ? BIO_PAGE.ROSER : BIO_PAGE.JORGE}
            className={({ isActive }) => linkStyle(isActive).toString()}>
            Bio & CV
          </NavLink>


        </li>
        <li className='nav-item'>
          <a target="_blank" href={pageId ? SOCIALMEDIA.ROSER : SOCIALMEDIA.JORGE} rel="noopener noreferrer">
            Instagram
          </a>

        </li>
        <li className='nav-item'>
          <a target="_blank" href={pageId ? EMAIL.ROSER : EMAIL.JORGE} rel="noopener noreferrer">
            E-mail
          </a>


        </li>

      </ul>
    </nav>
  )
}

export default Nav
