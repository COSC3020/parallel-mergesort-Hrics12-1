# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

So the mergeSortAsync function is recursivley dividing the array into halves at each step until the array reaches 1. Then at each recursive step there is $\Theta(log n)$ work because it is dividing the array into havles. The sort function is taking $n$ time where $n$ is the number of elements. So there is $\Theta(n log n)$ work being done. But the span is just $\Theta(n)$ because after all the recursive calls the sort function is called and needs the sorted halves, becuause it is not working in parallel it dominates the span.


https://medium.com/@antonioval/making-array-iteration-easy-when-using-async-await-6315c3225838

https://leocode.com/development/how-to-deal-with-async-await-in-the-array-functions/

https://stackoverflow.com/questions/35612428/call-async-await-functions-in-parallel

https://github.com/COSC3020/mergesort-Hrics12-1

Then I read pages 655,706 for DAG and 772 to around 800 for parallel in the book. Intro to algo 3rd edition

I used ChatGPT for the testing files, code.test.js and workflow/main.yml


"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
