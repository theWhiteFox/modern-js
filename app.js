// window methods objects properties

// alert
// alert('Hello World');

// prompt
// const input = prompt();
// alert(input);

// if(confirm('Are you sure?')) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

let val;

// outer height and width
val = window.outerHeight;
val = window.outerWidth;

// inner height and width
val = window.innerHeight;
val = window.innerWidth;

// scroll points
val = window.scrollY;
val = window.scrollX;

// location object
val = window.location;
val = window.location.hostname;
val = window.location.prot;
val = window.location.href;
val = window.location.search;

// redirect
// window.location.href = 'http://google.com';

// reload
// window.location.reload();

window.history.go(-2);
val = window.history.length;

// navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);