# Persona Blog

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp) | 
| CSS     | [https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp)      | 
| JS     | [https://www.w3schools.com/js/default.asp](https://www.w3schools.com/js/default.asp)      | 
| Git | [https://bootcampspot.instructure.com/](https://bootcampspot.instructure.com/)     | 

## Description

This personal blog built using JavaScript enables users to create, manage, and display blog posts dynamically. It uses HTML and CSS for structure and styling, while JavaScript handles features like adding, editing, and storing posts. Data is often stored in local storage, ensuring posts are retained even after page refreshes. The blog offers an interactive interface where users can easily navigate through posts and updates, providing a smooth and engaging experience.

Visit the github repo here: https://github.com/Vtencouchclimbr/Module-4-Challenge_Personal-Blog

~~~js
Example 1: 
function buildElement(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}
Example 2:
function readFromLocalStorage() {
    return JSON.parse(localStorage.getItem("blogPosts")) || [];
}
Example 3:
function toggleMode() {
    const body = document.body;
    const currentMode = body.classList.contains('dark') ? 'dark' : 'light';

    if (currentMode === 'light') {
        body.classList.add('dark');
        saveMode('dark');
    } else {
        body.classList.remove('dark');
        saveMode('light');
    }
}
~~~
## License
This project is not currently licensed

## Tests
There are currently no tests written for this application.

## Questions
If you have any questions, please reach out to me:
- Github: [vtencouchclimbr](https://github.com/vtencouchclimbr)
- Email: lmntrylmnt@gmail.com