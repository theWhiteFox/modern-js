let val;

val = document;
val = document.all;
val = document.all[1];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(script => {
  console.log(script.getAttribute('src'));
});

for (const iterator of scriptsArr) {
  console.log(iterator);
}

console.log(val);