let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";
document.querySelector('body').append(para1);

para1.classList.add('red');


let head3 = document.createElement('h3');
head3.innerText = "I'm blue h3!";
document.querySelector("body").append(head3);

head3.classList.add('blue');

let div1 = document.createElement('div');
document.querySelector('body').append(div1);

let head1 = document.createElement("h1");
head1.innerText = "I'm a div!";
div1.append(head1);

let para2 = document.createElement('p');
para2.innerText = "Me too!";
div1.append(para2);

div1.classList.add('div');