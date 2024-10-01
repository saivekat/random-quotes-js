const quoteTxt = document.getElementById('quoteTxt');
const quoteTag = document.getElementById('quoteTag');
const quoteAuthor = document.getElementById('author');
const quoteBtn = document.getElementById('generateQ');


function randomQuote(){
    fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
        quoteTxt.textContent = data.content;
        quoteTag.textContent = data.tags;
        quoteAuthor.textContent = `~ ${data.author}`;
    })
}
quoteBtn.addEventListener('click',() => {
    randomQuote();
})