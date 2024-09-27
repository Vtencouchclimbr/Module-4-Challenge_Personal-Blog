// Select the form element
const form = document.querySelector('form');

// Function to handle the form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const formData = new FormData(form);
  const formObject = {};

  // Convert FormData to a plain object
  formData.forEach((value, key) => {
    formObject[key] = value;
    console.log(`${key}: ${value}`);
  });

  // Check for missing data
  if (Object.values(formObject).some(value => !value)) {
    alert('Please fill in all fields.');
    return;
  }

  // Retrieve existing blog posts from local storage
  const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  // Add the new post to the existing posts
  existingPosts.push(formObject);

  // Store the updated posts array in local storage
  localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

  // Redirect to the blog page
  redirectPage('blog.html');
}

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// Add an event listener to the form on submit
form.addEventListener('submit', handleFormSubmission);