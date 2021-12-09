import React from 'react';

export function Selection(){
  return(
    <>
<div class="container-fluid my-4">
      <div class="row g-0">
      <div class="col-sm-12  d-flex justify-content-center bg-secondary py-3">
      <h3 class=""><b><i>About SelectionSort</i></b></h3>
      </div>
        <div class="col-sm-12  d-flex justify-content-center p-4 bg-warning">
        <div>
    <h4>The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
    </h4>
    <h5>
1) The subarray which is already sorted. 
</h5>
<h5>
2) Remaining subarray which is unsorted.</h5>
    <h4>
In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. </h4></div>
    </div>
    </div>
    </div>
    </>
    );
}