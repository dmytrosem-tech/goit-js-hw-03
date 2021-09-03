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

Object.entries(user).forEach((item) => console.log(`${item[0]}: ${item[1]}`));
