const words = [
  {
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  },
  {
    term: "Tautology",
    definition: "Logical argument constructed in such a way that it is logically irrefutable"
  },
  {
    term: "Oxymoron",
    definition: "Figure of speech that juxtaposes elements that appear to be contradictory"
  }
];
//

// fucntion to display dictionary
const displayMiniDictionary = () => {
  const contentDiv = document.getElementById('content');
  const dlElement = document.createElement('dl');

  // loop through each word in the array
  words.forEach(word => {

    const dtElement = document.createElement('dt');
    const strongElement = document.createElement('strong');
    strongElement.textContent = word.term;
    dtElement.appendChild(strongElement);

    const ddElement = document.createElement('dd');
    ddElement.textContent = word.definition;

    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
  });

  contentDiv.appendChild(dlElement);
};

// Call the function 
displayMiniDictionary();