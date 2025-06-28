## RECURSION

**Recursion** is a programming technique where a function calls itself to solve smaller instances of the same problem. It simplifies problems by:
- Breaking complex problems into smaller, identical sub-problems
- Reducing code complexity for recursive mathematical relationships
- Improving readability for naturally recursive problems

### Key Requirements:
1. **Base Case**: Termination condition that stops recursion
2. **Recursive Case**: Function calling itself with modified parameters

### TIME COMPLEXITY (Financial Forecasting):
1. **Unoptimized Recursion**: O(n) - Linear growth (single call per period)
2. **Memoized Recursion**: O(n) - Linear time with reduced overhead
3. **Iterative Version**: O(n) - Single pass through periods

### OPTIMIZATION TECHNIQUES:
1. **Memoization (Top-Down DP)**:
   - Cache results of expensive function calls
   - Trade memory for computation time
   - Eliminates redundant calculations of identical subproblems

2. **Iterative Conversion (Bottom-Up)**:
   - Convert recursion to loops
   - Avoids stack overflow risk
   - More memory efficient