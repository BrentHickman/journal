import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Entry from './entry.js';

//UI Logic

function handleBlogEntry(event) {
  event.preventDefault();
  const titleEntry = document.querySelector("#blog-title").value;
  const blogEntry = document.querySelector("#blog-entry").value;
  let newEntry = new Entry(titleEntry, blogEntry);
  console.log(newEntry.getTeaser());
}

window.addEventListener("load", function() {
  document.querySelector("#blogpost").addEventListener("submit", handleBlogEntry);
});
