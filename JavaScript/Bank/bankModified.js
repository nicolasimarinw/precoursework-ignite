/*This is another more complicated version - in this program I tried to create classes for customers as well 
and implement that in the logic */

console.log('Hello World!')

class Bank{
    constructor(){
      this.customers = {};  
      this.nextAccountNumber = 0;
    }
    
    addCustomer(customerName){
        this.nextAccountNumber ++;
        this.customers[this.nextAccountNumber] = new Customer(customerName, this.nextAccountNumber, 0);
        return this.nextAccountNumber;
    };

    deposit(accountNumber, depositValue){
        this.customers[accountNumber].value += depositValue;
    }

    checkFunds(accountNumber){
        let customer = this.customers[accountNumber];
        let funds = customer.value;
        if(funds > 5){
            console.log(`These are your funds ${customer.name}: ${funds}`);
        } else {
            console.log(` ${customer.name} is broke`);
        }
        
        return funds;
        
    }

    withdraw(accountNumber, withdrawValue){
        //return final balance
        if(this.checkFunds(accountNumber) >= withdrawValue){
            return this.customers[accountNumber].value -= withdrawValue;
        } else {
            console.log("Pay a fine");
            return  this.customers[accountNumber].value -= (withdrawValue + 300);
        }
        
    }
}


class Customer{
    constructor(name, accountNumber, startingValue){
        this.name = name; 
        this.accountNumber = accountNumber;
        this.value = startingValue;
    }
}


const bank = new Bank();
let sheldonAccountNumber = bank.addCustomer('Sheldon');
bank.deposit(sheldonAccountNumber, 1000);
console.log(bank.withdraw(sheldonAccountNumber, 6));
bank.checkFunds(sheldonAccountNumber);
bank.addCustomer('Leoson');
let nic = bank.addCustomer('Nic');
bank.withdraw(nic, 10);
bank.checkFunds(nic);
bank.withdraw(nic, 100);

console.log(bank);