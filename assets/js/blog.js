// TODO: Create a variable that selects the main element
const mainEl = document.getElementById('mainContent');
// TODO: Create a function that builds an element and appends it to the DOM
const blogPostEl = function(post) {
    const postEl = document.createElement('div');
    postEl.className = 'blog-post';

    const titleEl = document.createElement('h2');
    titleEl.textContent = post.title;
    postEl.appendChild(titleEl);

    const contentEl = document.createElement('p');
    contentEl.textContent = post.title;
    postEl.appendChild(contentEl);

    mainEl.appendChild(postEl);
};
// TODO: Create a function that handles the case where there are no blog posts to display
const noPost = function() {
    const noRes = document.createElement('p');
    noRes.textContent = 'No blog posts yet';

    mainEl.appendChild(noRes);
};
// TODO: Create a function that reads from local storage and returns the data
const localStor = function() {
    return JSON.parse(localStorage.getItem('blogPosts'))
};
// TODO: Call the function to render the list of blog posts
const renderPost = function() {
    const posts = localStor();
    if (posts.length === 0) {
        noPost();
    }
    posts.forEach(post => {
        createBlogPostEl(post);
    });
};
renderPost();