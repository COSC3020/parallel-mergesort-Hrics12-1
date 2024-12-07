const async = require('async');

async function parallelMergesort(array) {
    let tmp = new Array(array.length);
    await mergeSortAsync(array, 0, array.length - 1, tmp);
}

async function mergeSortAsync(array, lo, hi, tmp) {
    if (lo >= hi) return; 

    let mid = Math.floor((lo + hi) / 2); 

    await async.parallel([
        async () => await mergeSortAsync(array, lo, mid, tmp),
        async () => await mergeSortAsync(array, mid + 1, hi, tmp) 
    ]);

    sort(array, lo, mid, hi); 
}

function sort(array, l, m, r) { //sort function from my mergesort excercise
    var min = l;
    var min2 = m + 1;

    while ((min <= m) && (min2 <= r)) {
        if (array[min] > array[min2]) {
            let minVal = array[min2];
            for (var minP = min2; min < minP; minP--) {
                array[minP] = array[minP - 1];
            }
            array[min] = minVal;
            min++;
            min2++;
            m++;
        } else {
            min++;
        }
    }
}

