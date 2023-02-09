# JS Activity: Tip Calculator
## Overview
Beginner activities based on a simple Tip Calculator.

## Topics covered
Javascript features used in this script:
- [`const` declaration keyword](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
- [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## Running this code
### Browser
To run `tip-calculator.js` from the browser:
1. Download or clone this Gist into your workspace;
2. In this new directory, create a valid `index.html` file;
3. In the `<head>` of `index.html`, link to `tip-calculator.js` with a `<script>` tag:
    
    ```js
    <script src="tip-calculator.js" type="module">
    ```
4. Run `index.html` in the browser of your choice;
5. Open the [Web Console](https://developer.mozilla.org/en-US/docs/Tools/Web_Console) to view the output.

## Activities
Refactor this script to add/improve features:
1. Declare a new `tipPercentage` variable that outputs `18%` (or similar) and log that new variable in the `console.log()`.
2. Declare a new `paymentTotal` variable and set its value to the `billTotal` plus `tipAmount` and log it to the console.
3. Using [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), log a complete sentence to the console that uses the following variables:
    - `billTotal`
    - `tipPercentage`
    - `paymentTotal`
    - Example: "18% tip on $20 is $23.60"
4. The last time you checked, there's no coin for `$0.00001`. Use the [`Math.round()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) method to round the `tip` to the nearest cent.
    - Hint: You can multiply by 100, then round, then divide by 100 to round to the nearest cent.
