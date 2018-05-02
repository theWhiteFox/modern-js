(function() {
  "use strict";

  // document get elements by class name
  const items = document.getElementsByClassName("collection-item");
  items[0].style.color = "red";
  items[3].textContent = "HELLO!";
  console.log(items);
  console.log(items[0]);

  const listItems = document
    .querySelector("ul")
    .getElementsByClassName("collection-item");

  console.log(listItems);

  // get elements by tag name just the text in li
  let lis = document.getElementsByTagName("span");
  lis[1].style.color = "blue";
  lis[3].textContent = "GOODBYE!";
  console.log(lis);
  console.log(lis[0]);

  let lis1 = document.getElementsByTagName("li");
  // convert lis to Array
  lis1 = Array.from(lis1);

  lis1.reverse();
  
  lis1.forEach((li, index) => {
    console.log(li.className);
    li.textContent = `${index}: Hello`;
  });

  lis1[1].style.color = "pink";
  lis1[3].textContent = "Aha!";
  console.log(lis);
  console.log(lis[1]);

  // query selector all
  const items2 = document.querySelectorAll("ul.collection li.collection-item");

  items2.forEach((item, index) => {
    item.textContent = `${index}: Hello!`;
  });

  const liOdd = document.querySelectorAll('li:nth-child(odd)');
  const liEven = document.querySelectorAll('li:nth-child(even)');

  liOdd.forEach(li => {
      li.style.background = '#ccc';
  });

  for(let i = 0; i < liEven.length; i++) {
      liEven[i].style.background = '#f4f4f4';
  }

  console.log(items2);
})();
