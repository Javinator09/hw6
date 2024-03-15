// function to prompt user 
const calculateSum = () => {
  // prompt user for the first integer
  const num1 = parseInt(prompt("Enter the first integer:"));

  // check if the input is a valid integer
  if (isNaN(num1)) {

    showError(`"${num1}" is not a valid integer.`);
    return;
  }

  // prompt user for the second integer
  const num2 = parseInt(prompt("Enter the second integer:"));

  // check if the input is a valid integer
  if (isNaN(num2)) {

    showError(`"${num2}" is not a valid integer.`);
    return;
  }

  // calculate the sum
  const sum = num1 + num2;

  // display the sum
  showSum(num1, num2, sum);
}

// function to display the sum
const showSum = (num1, num2, sum) => {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `<span class="sum">${num1} + ${num2} = <strong>${sum}</strong></span>`;
}

// function to display error
const showError = (errorMessage) => {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `<span class="error">${errorMessage}</span>`;
}

// call the function 
calculateSum();