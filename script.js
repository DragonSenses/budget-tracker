"use strict";

const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

/* Array of transactions found on the user's browser.
A stringified array is returned, so needs to be converted via JSON.parse() */
const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

/* Transactions is the array of objects that each stores id, text, and amount.
Extract from user's localStorage if it exists, otherwise an empty array. */
let transactions = 
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

/**
 * Generates a unique ID for the transaction. For now, simply generates the
 * exact millisecond the transaction was created.
 * @returns number that represents a unique ID
 */
function generateID(){
  return new Date().getTime();
}

/**
 * Adds the new transaction
 * @param {Event} e event when user presses submit button 'Add Transaction'
 */
function addTransaction(e) {
  // Prevent the event argument from actually submitting
  e.preventDefault();

  if(text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a Transaction Name and Amount');
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value
    };

    // Push transaction the to array
    transactions.push(transaction);

    // Add transaction to the DOM
    addTransactionDOM(transaction);

    // Update values of the Budget container
    updateValues();

    // Sets the transaction in user's localStorage so data persists
    updateLocalStorage();

    // Clear the input fields
    text.value = '';
    amount.value = '';
  }

}


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
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">X</button></li>
  `;

  // Add the list item to the DOM as list's child node
  list.appendChild(item);
}


/**
 * Update the budget by calculating the balance, income, and expenses.
 */
function updateValues() {
  // Loop through the transactions array and create a new array with only amounts
  const amounts = transactions.map(transaction => 
    transaction.amount);

  // Reduce the array of amounts to a total, also set it to two decimal points
  const total = amounts
    .reduce((acc, val) => (acc += val), 0)
    .toFixed(2);
  
  // Get the income
  const income = amounts
    .filter((transaction) => transaction > 0)
    .reduce((acc, val) => (acc += val), 0)
    .toFixed(2);

  const expense = amounts
    .filter((transaction) => transaction < 0)
    .reduce((acc, val) => (acc += val), 0)
    .toFixed(2);

  balance.innerHTML = `$${total}`;
  money_plus.innerHTML = `$${income}`;
  money_minus.innerHTML = `$${expense}`;
}

/**
 * Remove transaction by its ID from the DOM.
 * @param {number} id the unique id of the transaction
 */
function removeTransaction(id){
  // Filter out the transaction by its id and save it to the array
  transactions = transactions.filter(transaction => transaction.id !== id);

  // Sets the transaction in user's localStorage so data persists
  updateLocalStorage();

  // Reinitialize app after removal to update data on the page
  init();
}

/**
 * Updates the localStorage on the user's browser with new transactions
 */
function updateLocalStorage(){
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

/**
 * Initializes the app with seed data (found in user's localStorage).
 */
function init(){
  // Clear out the list
  list.innerHTML = ''; 

  // For each transactions, add it as a list item and to the DOM
  transactions.forEach(addTransactionDOM);
  updateValues();
}

// Initialize the app
init();

/* Event Listeners */
form.addEventListener('submit', addTransaction);