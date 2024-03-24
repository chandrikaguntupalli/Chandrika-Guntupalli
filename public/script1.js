// script.js

document.addEventListener("DOMContentLoaded", function() {
    fetchTransactions();
    
    const transactionForm = document.getElementById('transaction-form');
    transactionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTransaction();
    });
});

async function fetchTransactions() {
    try {
        const response = await fetch("/transactions");
        const transactions = await response.json();
        renderTransactions(transactions);
    } catch (error) {
        console.error("Error fetching transactions:", error);
    }
}

async function addTransaction() {
    const categorySelect = document.getElementById('category_select').value;
    const amountInput = document.getElementById('amount_input').value;
    const infoInput = document.getElementById('info').value;
    const dateInput = document.getElementById('date_input').value;

    try {
        const response = await fetch("/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category_select: categorySelect,
                amount_input: amountInput,
                info: infoInput,
                date_input: dateInput
            })
        });
        if (response.ok) {
            fetchTransactions(); // Refresh transactions after adding
        } else {
            console.error("Failed to add transaction:", response.statusText);
        }
    } catch (error) {
        console.error("Error adding transaction:", error);
    }
}

function renderTransactions(transactions) {
    const expenseTableBody = document.getElementById('expense-table-body');
    const totalAmountCell = document.getElementById('total-amount');
    let totalAmount = 0;

    expenseTableBody.innerHTML = ''; // Clear existing rows

    transactions.forEach(transaction => {
        const newRow = expenseTableBody.insertRow();
        const categoryCell = newRow.insertCell();
        const amountCell = newRow.insertCell();
        const infoCell = newRow.insertCell();
        const dateCell = newRow.insertCell();
        const deleteCell = newRow.insertCell();

        categoryCell.textContent = transaction.Category;
        amountCell.textContent = transaction.Amount;
        infoCell.textContent = transaction.Info;
        dateCell.textContent = transaction.Date;

        if (transaction.Category === 'Income') {
            totalAmount += transaction.Amount;
        } else if (transaction.Category === 'Expense') {
            totalAmount -= transaction.Amount;
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', async () => {
            try {
                await fetch(`/transactions/${transaction._id}`, {
                    method: 'DELETE'
                });
                fetchTransactions(); // Refresh transactions after deletion
            } catch (error) {
                console.error("Error deleting transaction:", error);
            }
        });

        deleteCell.appendChild(deleteBtn);
    });

    totalAmountCell.textContent = totalAmount;
}
