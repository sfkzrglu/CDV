// Create a class named "Copier" that contains two variables, "copies" and "paper," and four methods. The methods "SetCopies(arg)" and "SetPaper(arg)" should set the "copies" and "paper" variables, respectively.
// The third method, "Copy(arg)," should print on the screen the number "arg" for "copies" times. For example, if "arg" is 5 and "copies" is 2, it should print: "5 and 5" (assuming there is enough paper).
// Each print operation (through a loop) should decrement the "paper" variable until it runs out. The fourth method, "CheckPaper()," should return true only if there is paper left.

// The program should create one object, "xerox," of type "Copier." It should call the methods "SetPaper(5)," "SetCopies(3)," "Copy(77)," "CheckPaper()," "Copy(44)," and "CheckPaper()" in sequence.

// --------
// 77
// 77
// 77
// true
// 44
// 44
// false
 

class Copier {
    copies: number = 0;
    paper: number = 0;

    SetCopies(arg: number): void {
        this.copies = arg;
    }

    SetPaper(arg: number): void {
        this.paper = arg;
    }

    Copy(arg: number): void {
        for (let i = 0; i < this.copies && this.CheckPaper(); i++) {
                console.log(arg);
                this.paper--;
        }
    }

    CheckPaper(): boolean {
        return this.paper > 0;
    }
}

let cp = new Copier();
cp.SetPaper(5);
cp.SetCopies(3);
cp.Copy(77);
console.log(cp.CheckPaper());
cp.Copy(44);
console.log(cp.CheckPaper());