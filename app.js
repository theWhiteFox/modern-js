let val;

const today = new Date();
let birthday = new Date(0);
birthday = new Date("January 31 1980 12:30");
birthday = new Date('9/10/1981 13:45');

val = birthday;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);