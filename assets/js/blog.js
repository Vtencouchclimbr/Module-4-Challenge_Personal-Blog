// TODO: Create a variable that selects the main element
const mainEl = document.getElementById('mainContent');
// TODO: Create a function that builds an element and appends it to the DOM
const createBlogPostEl = function(post) {
    const postEl = document.createElement('div');
    postEl.className = 'article card blockquote';

    const titleEl = document.createElement('h2');
    titleEl.textContent = post.title;
    postEl.appendChild(titleEl);
    titleEl.className = 'article blockquote';

    const contentEl = document.createElement('p');
    contentEl.textContent = post.content;
    postEl.appendChild(contentEl);
    contentEl.className = 'article blockquote';

    const usernameEl = document.createElement('p');
    usernameEl.textContent = post.username;
    postEl.appendChild(usernameEl);
    usernameEl.className = 'article blockquote';

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
    return JSON.parse(localStorage.getItem('formData'))
};
// TODO: Call the function to render the list of blog posts
const renderPost = function() {
    const posts = localStor();
    if (!posts || posts.length === 0) {
        noPost();
    } else { 
    posts.forEach(post => {
        createBlogPostEl(post);
    });
}
};
renderPost();

