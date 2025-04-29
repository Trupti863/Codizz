document.addEventListener('DOMContentLoaded', () => {
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const categoryInput = document.getElementById('category');
    const addExpenseBtn = document.getElementById('addExpenseBtn');
    const expenseList = document.getElementById('expenseList');
    const totalAmountDisplay = document.getElementById('totalAmount');

    let expenses = [];

    function addExpense() {
        const description = descriptionInput.value.trim();
        const amount = parseFloat(amountInput.value);
        const category = categoryInput.value.trim();

        if (description && !isNaN(amount)) {
            const newExpense = {
                id: Date.now(), // Simple unique ID
                description,
                amount,
                category
            };
            expenses.push(newExpense);
            renderExpenses();
            updateTotal();
            clearInputFields();
        } else {
            alert('Please enter a valid description and amount.');
        }
    }

    function renderExpenses() {
        expenseList.innerHTML = '';
        expenses.forEach(expense => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${expense.description} (${expense.category})</span>
                <span>₹${expense.amount.toFixed(2)}</span>
            `;
            expenseList.appendChild(listItem);
        });
    }

    function updateTotal() {
        const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        totalAmountDisplay.textContent = `₹${total.toFixed(2)}`; // Corrected syntax
    }

    function clearInputFields() {
        descriptionInput.value = '';
        amountInput.value = '';
        categoryInput.value = '';
    }

    addExpenseBtn.addEventListener('click', addExpense);

    // Initial rendering (in case there's any data loaded from storage later)
    renderExpenses();
    updateTotal();
});