fetch('https://www.omdbapi.com/?apikey=51154c5d&t=Predator: Badlands')
    .then(res => res.json())
    .then(movie => {
        document.getElementById("card1-img").src = movie.Poster;
        document.getElementById("card1-title").innerText = movie.Title
        document.getElementById("card1-text").innerText = movie.Plot
    });

fetch('https://www.omdbapi.com/?apikey=51154c5d&t=A Legend')
    .then(res => res.json())
    .then(movie => {
        document.getElementById("card2-img").src = movie.Poster;
        document.getElementById("card2-title").innerText = movie.Title
        document.getElementById("card2-text").innerText = movie.Plot
    });


fetch('https://www.omdbapi.com/?apikey=51154c5d&t=After the Hunt')
    .then(res => res.json())
    .then(movie => {
        document.getElementById("card3-img").src = movie.Poster;
        document.getElementById("card3-title").innerText = movie.Title
        document.getElementById("card3-text").innerText = movie.Plot
    });

fetch('https://www.omdbapi.com/?apikey=51154c5d&t=The Family Plan 2')
    .then(res => res.json())
    .then(movie => {
        document.getElementById("card4-img").src = movie.Poster;
        document.getElementById("card4-title").innerText = movie.Title
        document.getElementById("card4-text").innerText = movie.Plot
    });

fetch('https://www.omdbapi.com/?apikey=51154c5d&t=Sisu: Road to Revenge')
    .then(res => res.json())
    .then(movie => {
        document.getElementById("card5-img").src = movie.Poster;
        document.getElementById("card5-title").innerText = movie.Title
        document.getElementById("card5-text").innerText = movie.Plot
    });

fetch('https://www.omdbapi.com/?apikey=51154c5d&t=Superman')
    .then(res => res.json())
    .then(movie => {
        document.getElementById("card6-img").src = movie.Poster;
        document.getElementById("card6-title").innerText = movie.Title
        document.getElementById("card6-text").innerText = movie.Plot
    });
fetch('https://www.omdbapi.com/?apikey=51154c5d&t=Black Phone 2')
    .then(res => res.json())
    .then(movie => {
        document.getElementById("card7-img").src = movie.Poster;
        document.getElementById("card7-title").innerText = movie.Title
        document.getElementById("card7-text").innerText = movie.Plot
    });
fetch('https://www.omdbapi.com/?apikey=51154c5d&t=F1 The Movie')
    .then(res => res.json())
    .then(movie => {
        document.getElementById("card8-img").src = movie.Poster;
        document.getElementById("card8-title").innerText = movie.Title
        document.getElementById("card8-text").innerText = movie.Plot
    });