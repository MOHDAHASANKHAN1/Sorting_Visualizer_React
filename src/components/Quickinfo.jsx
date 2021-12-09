import React from 'react';

export function Quick(){
  return(
    <>
    <div class="container-fluid my-4">
      <div class="row g-0">
      <div class="col-sm-12  d-flex justify-content-center bg-secondary py-3">
      <h3 class=""><b><i>About QuickSortSort</i></b></h3>
      </div>
        <div class="col-sm-12  d-flex justify-content-center p-4 bg-warning">
        <div><h4>QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.</h4>
    <h5>1. Always pick first element as pivot.</h5>
    <h5>2. Always pick last element as pivot.</h5>
<h5>3. Pick a random element as pivot.</h5>
<h5>4. Pick median as pivot.</h5>
    </div>
    </div>
    </div>
    </div>
    </>
    );
}