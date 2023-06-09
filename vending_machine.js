var menu = {'coke': 1000, 'soda': 1000, 'coffee': 1000};
var count = 0;

function buyItem(choice) {
    count += 1;
    if (!(choice.toLowerCase() in menu)) {
        console.log("Invalid choice. Please try again.");
        return;
    }
    var quantity = parseInt(prompt("How many " + choice.charAt(0).toUpperCase() + choice.slice(1) + " would you like to buy? "));
    var cost = menu[choice.toLowerCase()] * quantity;
    if (count % 3 == 0) {
        console.log("It's free!");
        cost = 0;
    } else {
        console.log("The total cost is " + cost + " won.");
    }
    var paid = 0;
    while (paid <= cost) {
        var amount = parseInt(prompt("Please insert 1,000 won!"));
        if (isNaN(amount)) {
            console.log("Invalid input. Please enter a valid number.");
        } else {
            paid += amount;
            console.log("Total paid: " + paid + " won.");
        }
    }
}

console.log("Welcome to the vending machine!");
console.log("Here are the available options:");
for (var item in menu) {
    console.log(item.charAt(0).toUpperCase() + item.slice(1) + ": " + menu[item] + " won");
}
console.log("Thank you for using the vending machine!");
