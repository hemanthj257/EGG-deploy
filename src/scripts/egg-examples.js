// Collection of example EGG programs that users can load

export const examples = [
    {
      name: "Hello World",
      description: "Simple hello world program",
      code: `
  do(
      print("Hello, EGGlang!")
  )
  `
    },
    {
      name: "Array Sum",
      description: "Calculate the sum of array elements",
      code: `
  do(
      define(sum, fun(array,
          do(
              define(i, 0),
              define(total, 0),
              while(<(i, length(array)),
                  do(
                      define(total, +(total, element(array, i))),
                      define(i, +(i, 1))
                  )
              ),
              total
          )
      )),
      print(sum([1, 2, 3, 4, 5]))
  )
  `
    },
    {
      name: "Factorial",
      description: "Calculate the factorial of a number",
      code: `
  do(
      define(factorial, fun(n,
          if(==(n, 0),
              1,
              *(n, factorial(-(n, 1))))
      )),
      print(factorial(5))
  )
  `
    },
    {
      name: "Fibonacci",
      description: "Calculate Fibonacci numbers",
      code: `
  do(
      define(fib, fun(n,
          if(==(n, 0),
              0,
              if(==(n, 1),
                  1,
                  +(fib(-(n, 1)), fib(-(n, 2))))
          )
      )),
      print(fib(10))
  )
  `
    }
  ];
  
  // Function to get example by name
  export function getExampleByName(name) {
    return examples.find(example => example.name === name);
  }
  
  // Function to get all example names
  export function getExampleNames() {
    return examples.map(example => example.name);
  }