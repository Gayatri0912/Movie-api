const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'df78aa5262msh7fda2b47fda2eb0p1309e7jsnf34ffbe0c414',
        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};




async function getMovies() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        result.map((movie) => {
            const card = document.createElement('div');
            card.className = 'card';
            const title = document.createElement('h2');
            title.innerText = movie.title;
            const image = document.createElement('img');
            image.src = movie.image;
            const desc = document.createElement('p');
            desc.innerText = movie.description;
            const year = document.createElement('h3');
            year.innerText = movie.year;
            const rating = document.createElement('h4');
            rating.innerText = movie.rating;

            card.appendChild(title);
            card.appendChild(image);
            card.appendChild(desc);
            card.appendChild(year);
            card.appendChild(rating);

            document.getElementById('movies-container').appendChild(card);

        });



    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

document.getElementById("button").addEventListener("click", function() {
    this.style.display = "none";
});

const button = document.getElementById('button');
button.addEventListener('click', function() {
    document.body.style.backgroundImage = "none";
    button.body.style.backgroundColor = "white";
});