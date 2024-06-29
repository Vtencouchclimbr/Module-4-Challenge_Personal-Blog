// TODO: Create a variable that selects the main element
const mainEl = document.getElementsById('mainContent');
// TODO: Create a function that builds an element and appends it to the DOM
const blogPostEl = function(post) {
    const postEl = document.createElement('div');
    postEl.classname = 'blog-post';

    mainEl.appaendChild(postEl);
};
// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function that reads from local storage and returns the data

// TODO: Call the function to render the list of blog posts
