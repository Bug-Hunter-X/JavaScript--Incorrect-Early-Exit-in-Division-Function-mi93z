function foo(a, b) {
  if (b === 0) { 
    throw new Error('Division by zero'); // Handle division by zero
  } 
  return a / b; 
}