# JavaScript: Incorrect Early Exit in Division Function

This repository demonstrates a common, subtle error in JavaScript: an incorrect early exit condition in a function handling division.

The `foo` function is intended to divide two numbers.  However, its current implementation prematurely returns 0 if *either* input is zero, rather than only when the denominator is zero.

The solution showcases the corrected logic and includes tests to verify its accuracy.

## How to reproduce the bug

1. Clone the repository.
2. Run `bug.js`. Note the incorrect return value when one of the inputs is 0 but the other is not.

## Solution

The `bugSolution.js` file demonstrates the corrected logic: the function should only return 0 if the denominator is 0.  Otherwise it correctly handles the division.