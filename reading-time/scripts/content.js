
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
  badge.style.borderRadius="20px"
  badge.style.marginLeft="5px"
  badge.style.width="140px"
  badge.style.height='30px'
  badge.style.textIndent="5px"
  badge.style.background="linear-gradient(to right, #b92b27, #1565C0)"

  


  const heading = article.querySelector("h1");

  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
 }