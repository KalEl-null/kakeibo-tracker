var total = 0;

function addExpense() {

    var nameInput = document.getElementById("expenseName");
    var amountInput = document.getElementById("expenseAmount");

    var name = nameInput.value;
    var amount = amountInput.value;

    if (name === "" || amount === "") {
        alert("Please enter both fields");
        return;
    }

    amount = Number(amount);

    if (amount <= 0) {
        alert("Amount should be greater than zero");
        return;
    }

    total = total + amount;
    document.getElementById("total").innerText = total;

    var listItem = document.createElement("li");
    listItem.innerText = name + " - ₹ " + amount + " ";

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function () {
        total = total - amount;
        document.getElementById("total").innerText = total;
        listItem.remove();
    };

    listItem.appendChild(deleteBtn);
    document.getElementById("expenseList").appendChild(listItem);

    nameInput.value = "";
    amountInput.value = "";
    nameInput.focus();
}


// Move focus to Amount when Enter is pressed in Name field
document.getElementById("expenseName").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("expenseAmount").focus();
    }
});
