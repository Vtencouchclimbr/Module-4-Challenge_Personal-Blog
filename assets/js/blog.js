// Create a variable that selects the main element
const mainElement = document.querySelector('main');

// Function that builds an element and appends it to the DOM
function buildElement(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}

function appendElement(parent, element) {
    parent.appendChild(element);
}

// Function that handles the case where there are no blog posts to display
function handleNoPosts() {
    const noPostsElement = buildElement('p', 'No blog posts available.');
    appendElement(mainElement, noPostsElement);
}

// Function that reads from local storage and returns the data
function readFromLocalStorage() {
    return JSON.parse(localStorage.getItem("blogPosts")) || [];
}

// Function to render the list of blog posts
function renderBlogs() {
    const blogs = readFromLocalStorage();

    if (blogs.length === 0) {
        handleNoPosts();
        return;
    }

    blogs.forEach((blog) => {
        const article = document.createElement("article");
        const h2 = document.createElement("h2");
        const blockquote = document.createElement("blockquote");
        const p = document.createElement("p");

        h2.textContent = blog.title;
        blockquote.textContent = blog.content;
        p.textContent = `Posted by: ${blog.username}`;

        appendElement(article, h2);
        appendElement(article, blockquote);
        appendElement(article, p);
        appendElement(mainElement, article);
    });
    console.log(blogs);
}

// Call the function to render the list of blog posts
renderBlogs();