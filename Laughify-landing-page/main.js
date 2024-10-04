document.getElementById('joke-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const category = document.getElementById('category').value;
    const url = category === 'random'
        ? 'https://api.laughify.com/jokes/random'
        : `https://api.laughify.com/jokes/${category}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const joke = data.joke || 'No joke found!';
            document.getElementById('joke-result').innerText = joke;
        })
        .catch(err => {
            document.getElementById('joke-result').innerText = 'Error fetching joke!';
        });
});
