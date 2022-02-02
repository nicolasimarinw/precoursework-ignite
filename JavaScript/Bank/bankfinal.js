console.log('Hello World final!')

class Bank{
    constructor(){
        this.customers = {}
    }

    addCustomer(newCustomer){
        this.customers[newCustomer] = 0;
    }

    printAccount(customer){
        let funds = this.customers[customer];
        console.log(`${customer} account is: ${funds}`);
        return funds;
    }

    deposit(customer, depositAmount){
        this.customers[customer] += depositAmount;
        bank.printAccount(customer); 
    }
    
    withdraw(customer, withdrawAmount){
        if(this.printAccount(customer) > withdrawAmount){
            this.customers[customer] -= withdrawAmount;
            bank.printAccount(customer); 
        } else {
            console.log('Not enough funds!')
        }
    }


}

let bank = new Bank;

//Sheldon
bank.addCustomer('Sheldon');
bank.printAccount('Sheldon');
bank.deposit('Sheldon', 100);
bank.withdraw('Sheldon', 50);

//Raj
bank.addCustomer('Raj');
bank.printAccount('Raj');
bank.deposit('Raj', 10000);
bank.withdraw('Raj', 5400);

//Nico
bank.addCustomer('Nico');
bank.deposit('Nico', 200);

//Joe
bank.addCustomer('Joe');
bank.withdraw('Joe', 100);

bank.printAllAccounts;
console.log(bank);
