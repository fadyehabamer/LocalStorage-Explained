let form = document.querySelector('form')
let ul = document.querySelector('ul')
let input = document.querySelector('#todo')
let clear = document.querySelector('#clear')

// create and append li
const createLi = (text) => {
    // * way 1 [I dont Like it]
    let li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)

    // * Way 2 [ I Like It ]
    // ul.innerHTML += `
    //     <li> ${text} </li>
    // `
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    createLi(input.value);
    
    // add to local storage
    localStorage.setItem('tasks',input.value)
})
