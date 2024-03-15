// function to add a link to the College of Business
const addCollegeLink = () => {
  // create a new link element
  const collegeLink = document.createElement('a');

  // create link
  collegeLink.href = 'https://www.csulb.edu/college-of-business';
  collegeLink.textContent = 'College of Business';

  // find the parent element of the IS link
  const isLink = document.getElementById('is');
  const parentElement = isLink.parentElement;

  // insert the new link before the IS link
  parentElement.insertBefore(collegeLink, isLink);
}

// call the function to add the link to the College of Business
addCollegeLink();

////

