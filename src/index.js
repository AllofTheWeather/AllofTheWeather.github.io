import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import { App } from './App';
import { Homepage } from './Homepage';
import { Projects, ProjectList } from './Projects';
import ProjectPost from './ProjectPost';
import { Skills } from './Skills';
import ScrollToTop from "./ScrollToTop";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<App />}>
          <Route index path="/home" element={<Homepage />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/projects" element={<Projects />}>
            <Route index element={<ProjectList />} />
            <Route path=":slug" element={<ProjectPost />} />
          </Route>
          
        </Route>
      </Routes>
      </BrowserRouter>
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
