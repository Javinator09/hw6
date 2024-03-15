// displays all body nodes
const bodyNodes = () => {
  // get the body element
  const body = document.body;

  // iterate through each child node of the body
  for (let i = 0; i < body.childNodes.length; i++) {
    // display the node
    console.log(body.childNodes[i]);
  }
}

// call the bodyNodes function
bodyNodes();