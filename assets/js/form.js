// TODO: Create a variable that selects the form element
const formEl = document.getElementsById('form');
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.
let formSubmission = function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  if(!username || !title || !content) {
    alert("Please complete all fields to continue");
    return;
  }
  
  const formData = {
    username: username,
    title: title,
    content: content
  };

  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  blogPosts.push(formData);

localStorage.setItem('formData', JSON.stringify(formData));

redirectPage('blog.html');
};

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener('submit', formSubmission);