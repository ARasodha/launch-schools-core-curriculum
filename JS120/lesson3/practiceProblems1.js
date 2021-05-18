// Practice Problems: Factory Functions
// Exercise 1:
// Disadvantages of Working with Factory Functions
// - every function has a copy of all the methods- takes a toll on the size and memory of the program
// - there is no way to tell which factory function created a particular object in question therefore
// the type of object is difficult to identify

// Exercise 2:
// function makeObj() {
//   return {
//     propA: 10,
//     probB: 20,
//   }
// }

// Exercise 3:
// let invoice = {
//   phone: 3000,
//   internet: 6500
// };

// let payment = {
//   phone: 1300,
//   internet: 5500
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal); // => 6800
// console.log(remainingDue); // => 2700

// function createInvoice(services = {}) {
//   return {
//     phone: services.phone ? services.phone : 3000,
//     internet: services.internet ? services.internet : 5500,
//     total() {
//       return this.phone + this.internet;
//     },
//   };
// }

// function invoiceTotal(invoices) {
//   let total = 0;

//   for (let index = 0; index < invoices.length; index += 1) {
//     total += invoices[index].total();
//   }

//   return total;
// }

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({ internet: 6500 }));
// invoices.push(createInvoice({ phone: 2000 }));
// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices)); // 31000

// Exercise 4:
// function createPayment(services = {}) {
//   return {
//     internet: services.internet ? services.internet : 0,
//     phone: services.phone ? services.phone : 0,
//     amount: services.amount ? services.amount : 0,
//     total () {
//       if (this.amount) return this.amount;
//       return this.internet + this.phone;
//     },
//   }
// }

// function paymentTotal(payments) {
//   return payments.reduce((sum, payment)  => sum + payment.total(), 0);
// }

// let payments = [];
// payments.push(createPayment());
// payments.push(createPayment({
//   internet: 6500,
// }));

// payments.push(createPayment({
//   phone: 2000,
// }));

// payments.push(createPayment({
//   phone: 1000,
//   internet: 4500,
// }));

// payments.push(createPayment({
//   amount: 10000,
// }));

// console.log(paymentTotal(payments));      // => 24000

// Exercise 5:
function createInvoice(services = {}) {
  return {
    phone: services.phone ? services.phone : 3000,
    internet: services.internet ? services.internet : 5500,
    payments: [],
    total() {
      return this.phone + this.internet;
    },
    addPayment(payment) {
      this.payments.push(payment);
    },
    addPayments(payments) {
      this.payments.push(...payments);
    },
    totalPayment() {
      return this.payments.reduce((sum, payment) => sum + payment.total(), 0);
    },
    amountDue() {
      return this.total() - this.totalPayment();
    }
  };
}

function createPayment(services = {}) {
  return {
    internet: services.internet ? services.internet : 0,
    phone: services.phone ? services.phone : 0,
    amount: services.amount ? services.amount : 0,
    total () {
      if (this.amount) return this.amount;
      return this.internet + this.phone;
    },
  }
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0