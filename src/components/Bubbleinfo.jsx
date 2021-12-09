import React from 'react';
import './Css/Main_bootstrap.css';

export function Bubble(){
  return(
    <>
    <div class="container-fluid my-4">
      <div class="row g-0">
      <div class="col-sm-12  d-flex justify-content-center bg-secondary py-3">
      <h3 class=""><b><i>About BubbleSort</i></b></h3>
      </div>
        <div class="col-sm-12  d-flex justify-content-center p-4 bg-warning">
    <h4>Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.</h4>
    </div>
    </div>
    </div>
    </>
    );
}