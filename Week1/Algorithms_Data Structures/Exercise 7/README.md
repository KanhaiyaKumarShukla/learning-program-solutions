
## RECURSION :

**Recursion** is a programming technique where a function calls itself to solve smaller instances of the same problem. It simplifies problems by Breaking complex problems into smaller, identical sub-problem.


## Time Complecity:
    1. **Unoptimized Recursion**: O(2^n) - Exponential growth due to redundant calculations

    2. **Memoized Recursion**: O(n) - Linear time by storing computed results

    3. **Iterative Version**: O(n) - Single pass through growth rates

## Optimization Techniques:

1. **Memoization (Top-Down DP)**:

    * Cache results of expensive function calls

    * Trade memory for computation time

    * Eliminates redundant recursive calls

2. **Iterative Conversion (Bottom-Up)**:

    * Convert recursion to loops

    * Avoids stack overflow risk

    * More memory efficient