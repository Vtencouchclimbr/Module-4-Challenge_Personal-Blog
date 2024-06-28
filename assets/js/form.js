// TODO: Create a variable that selects the form element
let formEl = document.getElementsByTagName('form');
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.
let formSubmission = function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  if(!username || !title || !content) {
    alert("Please complete the form");
    return;
  }
  
  const formData = {
    username: username,
    title: title,
    content: content
  };
localStorage.setItem('formData', JSON.stringify(formData));

}

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
