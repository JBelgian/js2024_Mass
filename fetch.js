const url = 'http://localhost:3000/posts';
const output = document.getElementById('output');

function fetchdata() {
    output.innerHTML = '';
    fetch(url)
    .then(res => res.json())
    .then(
        data => data.forEach(smurf => {
            output.innerHTML += `<div class="post-item"><li>${smurf.id} ${smurf.title} </li><button onclick="deletePost('${smurf.id}')">Delete</button></div>`;
        })
    )
    .catch(e => console.log(e));
}
fetchdata();

const button = document.getElementById('clear');



function deletePost(id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
    .then(() => fetchdata())
    .catch(e => console.error('Error deleting post:', e));
}

function addPost () {
    const newPost = {
        title: document.getElementById('title').value,
        views: parseInt(document.getElementById('views').value),
        likes: parseInt(document.getElementById('likes').value) || 0
    };
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    })
    .then(() => fetchdata())
    .catch(e => console.error('Error adding post:', e));
}

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