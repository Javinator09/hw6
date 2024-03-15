// display text for 400 level courses
const displayText400 = () => {
  // select all list items containing course codes
  const courseItems = document.querySelectorAll('.iscourses li');

  // iterate over each course item
  courseItems.forEach(item => {
    // extract the course code from the text content
    const courseCode = item.textContent.trim();

    // check if the course code starts with is 4
    if (courseCode.startsWith('IS 4')) {
      // display the text content of the course item
      console.log(item.textContent.trim());
    }
  });
}

// call the function to display text for is 400 courses
displayText400();