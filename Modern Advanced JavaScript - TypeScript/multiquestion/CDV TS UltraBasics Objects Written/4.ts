// Create a class named "Balance" that contains two integer variables, "right" and "left," and three methods. The methods "OnRight(int arg)" and "OnLeft(int arg)" should set the "right" and "left" variables, respectively. The third method, "IsBalanced()", should return true only if the "right" and "left" variables are equal.

// The program should create one object, "myBalance," of type "Balance." It should call the methods "OnRight(10)," "OnLeft(12)," and "OnLeft(10)" in sequence, and finally, it should display whether there is balance using the "IsBalanced()" method.

// ----------
// Yes, balanced.
 

class Balance {
    right: number = 0;
    left: number = 0;

    OnRight(arg: number): void {
        this.right = arg;
    }

    OnLeft(arg: number): void {
        this.left = arg;
    }

    IsBalanced(): boolean {
        return this.right === this.left;
    }
}

const myBalance = new Balance();
myBalance.OnRight(10);
myBalance.OnLeft(12);
myBalance.OnLeft(10);
if (myBalance.IsBalanced()) {
    console.log("Yes, balanced.");
} else {
    console.log("No, not balanced.");
}