const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
  skills: {
    lazy: 5,
    smart: 1,
  },
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

// Два варика через Object.keys() с разными методами перебора------------------>
const keyArr = Object.keys(user);
// Вариант через фор ... оф------------------------------------>
for (let key of keyArr) {
  console.log(`${key}: ${user[key]}`);
}
// Вариант через форИч----------------------------------------->
keyArr.forEach((key) => console.log(`${key}: ${user[key]}`));

// Варинат сразу обратится к значениям и ключам--------------------------------->
Object.entries(user).forEach((item) => console.log(`${item[0]}: ${item[1]}`));
