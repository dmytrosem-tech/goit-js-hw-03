const countTotalSalary = function (employees) {
  let value = 0;
  Object.values(employees).forEach((num) => (value += num));
  return value;
};

// const countTotalSalary = (employees) =>
//   Object.values(employees).reduce((acc, current) => acc + current);

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
