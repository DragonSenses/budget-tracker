# budget-tracker
 A budget tracking web app that displays the users balance, income, and expenses. Also displays the transaction history which dynamically updates the balance, income, and expenses when new transactions are added. 

# Description

A simple CRUD application made with HTML5, CSS3, and JavaScript. 

App's purpose is to help to help the user keep track of their budget and transactions. 

This app uses [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to save *transactions* right in the browser! 
  - More details about [Local Storage](#local-storage) 

**User can perform CRUD operations**

- User can ***C**reate* transactions
- User can ***R**ead* transactions, budget, income & expenses
- User can ***U**pdate* transaction history, budget, income & expenses
- User can ***D**elete* transactions

*Transactions* are stored in the browser so it can be accessed across different browser sessions using the same web browser (Chrome, FireFox, Edge, Opera). 

# Technologies:

HTML5, CSS3, JavaScript

# How to use

1. **Create** a transaction by adding a name where *Transaction Name* is located, and add the Amount where *Enter amount...* is located 
2. **Read** Notes
3. **Update** the *Balance, Income, Expense and Transaction History* by adding another transaction or delete a transaction from *Transaction History*
4. **Delete** a transaction by hovering over the transaction under the **Transaction History** and press `X` delete button that shows up to the left of it. **Be careful** as it deletes it immediately without confirmation. 

# Instructions to run a local copy

1. Clone this repository and save to a folder on a laptop (or on GitHub click `Code` > `Download Zip`)

2. Go to the directory (folder) where code is stored 

3. Open up `index.html` in any browser
    * bookmark the page to use later

---

## Local Storage

- Shared between all tabs and windows from the same origin 
  - If data is set in one window, the change becomes visible in another one.
- The data does not expire. It remains after the browser restart and even after OS reboot
- Only have to be on the same origin (domain/port/protocol), the URL path can be different
- Limit is around ~5mb, depending on the browser

So closing/opening the browser or opening the same page in a different window will not remove
the data. 

To see the data being saved in ***Local Storage*** 
- press `[F12]` to open Developer Tools in the browser, while app (or `index.html`) is open
- Click `Application` tab
- On the left panel go to `Storage` > `Local Storage`

*Note*: If you do not want data to be saved on your browser, try opening the app in "incognito" or "private browsing" so data will be cleared when the last "private" tab is closed

* To assuage any privacy concerns, data is not saved in any other place other than your own personal machine's web browser