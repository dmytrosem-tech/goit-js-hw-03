// const findBestEmployee = function (employees) {
//   const valueArr = Object.values(employees);
//   const keyArr = Object.keys(employees);
//   const sort = [...valueArr].sort((a, b) => b - a);
//   const value = sort[0];
//   return keyArr.find((key) => employees[key] === value);
// };

const findBestEmployee = function (employees) {
  const valueArr = Object.values(employees);
  const keyArr = Object.keys(employees);
  const sort = [...valueArr].sort((a, b) => b - a);
  const value = sort[0];
  return keyArr.find((key) => employees[key] === value);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux
