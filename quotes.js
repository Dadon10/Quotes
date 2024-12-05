// Simple Program: Random Motivational Quote Generator

// Array of motivational quotes
const quotes = [
    "Believe in yourself and all that you are.",
    "Every day is a second chance.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Dream big and dare to fail.",
    "Your only limit is your mind."
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Display a random quote
console.log("Here's your motivational quote:");
console.log(getRandomQuote());
