import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Entry from './entry.js';

//UI Logic

function handleBlogEntry(event) {
  event.preventDefault();
  const titleEntry = document.querySelector("#blog-title").value;
  const blogEntry = document.querySelector("#blog-entry").value;
  const titleShow = document.createElement("p");
  const entryShow = document.createElement("p");
  const newWordCount = document.createElement("p");
  const newVowelCount = document.createElement("p");
  const newConsCount = document.createElement("p");
  const newTeaser = document.createElement("p");
  let newEntry = new Entry(titleEntry, blogEntry);

  titleShow.innerHTML = "Title: " + titleEntry;
  document.getElementById("response").append(titleShow);

  entryShow.innerHTML = "Journal Entry: " + blogEntry;
  document.getElementById("response").append(entryShow);

  newWordCount.innerHTML = "Word count: " + newEntry.countWords();
  document.getElementById("response").append(newWordCount);

  newVowelCount.innerHTML = "Vowel count: " + newEntry.countVowels();
  document.getElementById("response").append(newVowelCount);

  newConsCount.innerHTML = "Consonant count: " + newEntry.countConsonants();
  document.getElementById("response").append(newConsCount);

  newTeaser.innerHTML = "Teaser: " + newEntry.getTeaser();
  document.getElementById("response").append(newTeaser);


}

window.addEventListener("load", function() {
  document.querySelector("#blogpost").addEventListener("submit", handleBlogEntry);
});
