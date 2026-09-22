/**
 * Practical Example 05: Async Fetch Quote Generator
 * Demonstrating:
 *  - Async/Await with Fetch API
 *  - Error handling with try/catch and fallback dataset
 *  - Clipboard API (navigator.clipboard.writeText)
 *  - Temporary toast notifications
 */

'use strict';

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const copyBtn = document.getElementById('copy-btn');
const toast = document.getElementById('toast');

// Fallback quotes in case of network failure or offline study
const fallbackQuotes = [
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" }
];

async function fetchQuote() {
  newQuoteBtn.disabled = true;
  newQuoteBtn.textContent = "Fetching...";

  try {
    // Attempt to fetch from public quotes API
    const response = await fetch('https://dummyjson.com/quotes/random');
    
    if (!response.ok) {
      throw new Error(`Server returned status: ${response.status}`);
    }

    const data = await response.json();
    displayQuote(data.quote, data.author);
  } catch (error) {
    console.warn("External API fetch failed, utilizing offline fallback quote dataset:", error);
    // Graceful degradation fallback
    const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
    const fallback = fallbackQuotes[randomIndex];
    displayQuote(fallback.text, fallback.author);
  } finally {
    newQuoteBtn.disabled = false;
    newQuoteBtn.innerHTML = `<span class="icon">⚡</span> Get New Quote`;
  }
}

function displayQuote(text, author) {
  quoteText.textContent = `"${text}"`;
  quoteAuthor.textContent = `— ${author}`;
}

// Copy quote to clipboard using modern Navigator API
async function copyQuoteToClipboard() {
  const fullText = `${quoteText.textContent} ${quoteAuthor.textContent}`;
  
  try {
    await navigator.clipboard.writeText(fullText);
    showToast("Quote copied to clipboard!");
  } catch (err) {
    console.error("Clipboard copy failed:", err);
    showToast("Failed to copy quote.");
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2500);
}

// Event Listeners
newQuoteBtn.addEventListener('click', fetchQuote);
copyBtn.addEventListener('click', copyQuoteToClipboard);
