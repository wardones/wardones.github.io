/* wardone portfolio — interactions */

// Cycling hero word
const wordsEl = document.querySelector(".hero__words");
if (wordsEl) {
  const words = wordsEl.dataset.words.split(",").map((w) => w.trim());
  let i = 0;

  setInterval(() => {
    wordsEl.classList.add("is-swapping");
    setTimeout(() => {
      i = (i + 1) % words.length;
      wordsEl.textContent = words[i];
      wordsEl.classList.remove("is-swapping");
    }, 350);
  }, 2200);
}

// Current year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
