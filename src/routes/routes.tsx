import React from 'react';
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Skills from "../Pages/Skills/Skills";





export const routes = [
  { path: '/', component: Home },
  { path: '/About', component: About },
  { path: '/Skills', component: Skills },
  { path: '/Projects/*', component: Projects },
  { path: '/Contact', component: Contact },
];



