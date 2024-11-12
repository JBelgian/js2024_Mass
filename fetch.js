const url = 'https://jsonplaceholder.typicode.com/todos';
const output = document.getElementById('output');

function fetchdata() {
    fetch(url)
    .then(res => res.json())
    .then(
        data => data.forEach(smurf => {
            output.innerHTML += `<li>${smurf.title}</li>`;
        })
    )
    .catch(e => console.log(e));
}
fetchdata();

const button = document.getElementById('clear');
button.addEventListener('click', () => {
    output.innerHTML = '';
})

console.log(data)
// HTTP VERB (GET) (POST,DELETE,PUT)

// SUBPROBLEMS

// create a basic HTML structure
// create a JS file with logic
// find endpoint api
// consume endpoint api
// display data in HTML using an iteration
        // make iteration
        // create HTML node (id)
        // node.innerHTML (+=)
// analyse array of objects structure (wich attributes are available)
// Done ;)