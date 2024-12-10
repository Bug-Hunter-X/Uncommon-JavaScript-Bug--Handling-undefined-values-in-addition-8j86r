# Uncommon JavaScript Bug: Handling undefined values in addition

This repository demonstrates a common yet often overlooked bug in JavaScript related to handling undefined values in arithmetic operations.  The bug involves a function that intends to add two numbers but does not gracefully handle cases where one or both inputs are `undefined`.

The `bug.js` file contains the buggy code, highlighting the unexpected `TypeError`.  The `bugSolution.js` file shows how to correct this by explicitly checking for `undefined` values using the strict equality operator (`===`) and providing appropriate handling (in this case, returning `NaN` which is a standard way to represent undefined results of mathematical operations).

This simple example showcases the importance of rigorous input validation when writing JavaScript functions, especially when performing calculations.  Failure to handle unexpected input types can lead to unexpected errors and program crashes.