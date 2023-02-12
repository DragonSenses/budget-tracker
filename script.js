const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

/* Create an array that has the initial set of data */
const seed = [
  { id: 1, text: 'Book', amount: -20 },
  { id: 2, text: 'Salary', amount: 1000},
  { id: 3, text: 'Food', amount: -450},
  { id: 4, text: 'Essentials', amount: -240},
  { id: 5, text: 'Gift', amount: 100}
];

// soon will add the seed associated with user's local storage
let transactions = seed;

/**
 * Adds the transaction to the DOM
 * @param {*} transaction the amount of transaction (e.g, 20 or -10)
 */
function addTransactionDOM(transaction){
  // Distinguish transaction as either expense or income
  const sign = transaction.amount < 0 ? '-' : '+';

  /* Recall: a list item in Transaction history follows the format:
      <li class="plus">Cash <span>+$700</span><button class="delete-btn">X</button></li>
  */
  
  // Create a list item 
  const item = document.createElement('li');

  // Add class based on amount
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

  // Create the HTML to list item
  // Negative number has a minus sign, so wrap it with Math.abs to get only the magnitude
  item.innerHTML =  `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> 
    <button class="delete-btn">X</button></li>
  `;

  // Add the list item to the DOM as list's child node
  list.appendChild(item);
}

/**
 * Initializes the app with seed data.
 */
function init(){
  // Clear out the list
  list.innerHTML = ''; 

  // For each transactions, add it as a list item and to the DOM
  transactions.forEach(addTransactionDOM);
}

init();