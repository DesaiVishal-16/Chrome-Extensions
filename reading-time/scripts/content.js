
const article = document.querySelector("article");


if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);

  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");

  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️${readingTime} min read`;
  badge.style.border="none"
  badge.style.color="#ffffff"
  const textWidth = badge.textContent.length * 10;
  badge.style.width = `${textWidth}px`;
  badge.style.padding = "5px 10px";
  badge.style.borderRadius = "20px";
  badge.style.fontSize = "14px"; 
  badge.style.display = "flex";
  badge.style.alignItems = "center"
  badge.style.background="linear-gradient(to right, #b92b27, #1565C0)"

  


  const heading = article.querySelector("h1");

  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
 }