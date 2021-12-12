import React from 'react';
import {Link} from "react-router-dom"

export default function Navbarh(){
  return(
    <>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sorting Visualizer</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/visualize">Goto Visualizer</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About Us</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
    );
}