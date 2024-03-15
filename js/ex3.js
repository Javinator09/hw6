// function to change paragraph elements to bold with a yellow background
const styleParagraphs = () => {
  // select all paragraph elements
  const paragraphs = document.querySelectorAll('p');

  // iterate over each paragraph element
  paragraphs.forEach(paragraph => {
      // apply bold font and yellow highlight
      paragraph.style.fontWeight = 'bold';
      paragraph.style.backgroundColor = 'yellow';
  });
}

// call the function to apply the styles
styleParagraphs();