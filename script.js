function calculateEMI() {
  const principal = document.getElementById('principal').value;
  const interestRate = document.getElementById('interest').value;
  const duration = document.getElementById('duration').value;

  if (principal && interestRate && duration) {
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numerator = principal * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), duration);
    const denominator = Math.pow((1 + monthlyInterestRate), duration) - 1;
    const emi = numerator / denominator;

    document.getElementById('result').innerText = `EMI: ₹${emi.toFixed(2)}`;
  } else {
    document.getElementById('result').innerText = 'Please enter all fields';
  }
}
