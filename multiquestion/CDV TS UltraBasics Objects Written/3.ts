// Create a class named "Card" that contains one variable "credit" with an initial value of 100. The class should have one method named "Pay(arg)" which subtracts the specified amount from "credit," and another method named "Balance()" which returns the current credit. The program should create two objects, "visa" and "master," of type "Card." It should pay 30 credit with Visa and 40 credit with MasterCard. Finally, it should display the balances of both cards.

// --------
// 70
// 60
 

class Card {
    credit: number = 100;

    Pay(amount: number): void {
        this.credit -= amount;
    }

    Balance(): number {
        return this.credit;
    }
}

const visa = new Card();
const master = new Card();

visa.Pay(30);
master.Pay(40);

console.log(visa.Balance());
console.log(master.Balance());