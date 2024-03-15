// function to generate and display the number table
const createNumberTable = () => {
  const outputDiv = document.getElementById('output');
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse'; 

  // create rows and cells for numbers 1 to 12
  for (let i = 1; i <= 12; i++) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');

    // set text content to the current number
    cell.textContent = i;

    // add blue background if number is divisible by 4
    if (i % 4 === 0) {
      cell.style.backgroundColor = 'blue';
    }

    // center align text
    cell.style.textAlign = 'center';
    cell.style.border = '1px solid black'; 
    // append cell to the row and row to the table
    row.appendChild(cell);
    table.appendChild(row);
  }

  // append the table 
  outputDiv.appendChild(table);
};

// call the function
createNumberTable();