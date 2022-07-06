// 1) HTML collection
// 2) Node list
// 3) collection

// const p = document.querySelectorAll("p");
// console.log("p", p);
// console.log("arr", [1, 2, 3, 4, 5]);

// const list = document.querySelector(".list");

// const createLi = (count) => {
//   for (let i = 0; i < count; i += 1) {
//     const li = document.createElement("li");
//     li.textContent = `${i}`;
//     list.append(li);
//   }
// };

// createLi(10);
// const children = document.querySelectorAll("li");
// children.forEach((el, i) => {
//   if (i === 1) {
//     el.remove();
//   }
// });
// console.log(children);
// const filteredLi = [...list.children].filter(
//   (li, index) => index !== 1 || index !== 4 || index !== 7
// );

// list.innerHTML = "";
// list.append(...filteredLi);

// const button = document.querySelector("button");
// console.log(button.closest("p"));

// const overlay = document.querySelector(".overlay");
// const modal = document.querySelector(".modal");
// const title = document.createElement("h1");
// title.textContent = "Hello World";
// const titleCopy = title.cloneNode(true);
// overlay.append(title);
// modal.append(titleCopy);
const body = document.querySelector("body");

// create elements
const main = document.createElement("main");
const title = document.createElement("h1");
const figure = document.createElement("figure");
const img = document.createElement("img");
const figcaption = document.createElement("figcaption");

// add atr
main.id = "main";
title.id = "title";
figure.id = "img-div";
img.id = "image";
img.src = "https://picsum.photos/id/237/200/300";
img.alt = "random image";
figcaption.id = "img-caption";

// add textContent
title.textContent = "- Michel Legrand -";
figcaption.textContent = "Michel Legrand conducting his orcherstra.";

// paste to DOM
body.prepend(main);
main.append(title);
main.append(figure);
figure.append(img);
figure.append(figcaption);

const article = `<article id="tribute-info">
        <div id="intro"><p>&bull; Michel Legrand (1932 - 2019) was a famous French musician. &bull;</p></div>
        <p><u>Here are some major facts about him:</u></p>
        <p>
          <ul class='fact-list'>
          </ul>
      </p>
        <blockquote id="quote">
          <p>Writing is a mental thing, while playing is essentially a physical feeling.</p>
          <cite>-- Michel Legrand</cite>
        </blockquote>
        <hr>
        <p>To find out more about him, feel free to have a look at his biography on <a id="tribute-link" href="https://en.wikipedia.org/wiki/Michel_Legrand" target="_blank">Wikipedia</a>.</p>
      </article>`;

main.insertAdjacentHTML("beforeend", article);

const ul = document.querySelector("ul");

const facts = [
  "He was born in Paris, France on February 24<sup>th</sup>, 1932.",
  "His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.",
  "His sister was a Soprano and a member of the Swingle Singers.",
  "Along his career, he composed more than two hundred film and television scores.",
  "He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.",
  "He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes.",
  "He died of sepsis during the night of the 25<sup>th</sup> to 26<sup>th</sup> January 2019 in the American Hospital of Paris.",
  "He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.",
];

// const createLiFromArray = (array) =>
//   array.map((el) => `<li>${el}</li>`).join("");
const createLiFromArray = (array) =>
  array.reduce((acc, el) => acc + `<li>${el}</li>`, "");
// `<li>He was born in Paris, France on February 24<sup>th</sup>, 1932.</li>`
// `<li>He was born in Paris, France on February 24<sup>th</sup>, 1932.</li><li>His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.</li>`
const list = createLiFromArray(facts);
ul.insertAdjacentHTML("beforeend", list);
console.log(createLiFromArray(facts));
