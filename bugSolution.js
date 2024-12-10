function foo(a, b) {
  if (a === undefined || b === undefined) {
    return NaN; // Handle undefined values
  } else if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(undefined, 2)); // NaN
console.log(foo(1, undefined)); // NaN
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(undefined, undefined)); // NaN