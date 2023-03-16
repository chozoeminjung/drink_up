var menu = {'coke': 1000, 'soda': 800, 'coffee': 1200};

function buyItem(choice) {
    choice = choice.toLowerCase();
    if (!(choice in menu)) {
        console.log("Invalid choice. Please try again.");
        return;
    }
    var quantity = parseInt(prompt("How many " + choice + "s would you like to buy? "));
    if (isNaN(quantity)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }
    var cost = menu[choice] * quantity;
    console.log("The total cost is " + cost + " won.");
    var paid = 0;
    while (paid < cost) {
        var amount = parseInt(prompt("How much have you inserted? "));
        if (isNaN(amount)) {
            console.log("Invalid input. Please enter a valid number.");
        } else {
            paid += amount;
            console.log("Total paid: " + paid + " won.");
        }
    }
    var change = paid - cost;
    if (change > 0) {
        console.log("Here is your " + quantity + " " + choice + "s.");
        console.log("And here is your " + change + " won in change.");
    } else {
        console.log("Here is your " + quantity + " " + choice + "s.");
    }
}

console.log("Welcome to the vending machine!");
console.log("Here are the available options:");
for (var item in menu) {
    console.log(item.charAt(0).toUpperCase() + item.slice(1) + ": " + menu[item] + " won");
}
console.log("Thank you for using the vending machine!");



