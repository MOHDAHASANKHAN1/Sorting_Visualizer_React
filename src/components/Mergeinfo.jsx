import React from 'react';

export function Merge(){
  return(
    <>
     <div class="container-fluid my-4">
      <div class="row g-0">
      <div class="col-sm-12  d-flex justify-content-center bg-secondary py-3">
      <h3 class=""><b><i>About MergeSort</i></b></h3>
      </div>
        <div class="col-sm-12  d-flex justify-content-center p-4 bg-warning">
    <h4>Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one. </h4>
    </div>
    </div>
    </div>
   
    </>
    );
}