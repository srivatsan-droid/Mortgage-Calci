function calculateMonthlyPayment(principal, annualInterestRate, years) {
  const monthlyInterestRate = annualInterestRate / 100 / 12;
  const numberOfPayments = years * 12;

  let monthlyPayment;
  if (annualInterestRate > 0) {
    monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  } else {
    monthlyPayment = principal / numberOfPayments; // For 0% interest rate
  }

  return monthlyPayment;
}

function calculateMonthlyPayments() {
  // Generate random inputs
  const mortgageAmount = Math.floor(Math.random() * (500000 - 100000 + 1)) + 100000; // Random mortgage amount between $100,000 and $500,000
  const interestRate = (Math.random() * (7.0 - 2.0) + 2.0).toFixed(2); // Random interest rate between 2% and 7%
  const mortgageTerm = Math.floor(Math.random() * (30 - 15 + 1)) + 15; // Random mortgage term between 15 and 30 years

  // Calculate the monthly payment
  const monthlyPayment = calculateMonthlyPayment(mortgageAmount, interestRate, mortgageTerm);

  // Output the results
  document.getElementById("resultAmount").innerText = `Mortgage Amount: $${mortgageAmount.toFixed(2)}`;
  document.getElementById("resultInterestRate").innerText = `Interest Rate: ${interestRate}%`;
  document.getElementById("resultTerm").innerText = `Mortgage Term: ${mortgageTerm} years`;
  document.getElementById("resultPayment").innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}
