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

function Search() {
    let movieName = document.getElementById("search").value.trim();

    if (movieName == "") {
        alert("Enter movie name first");
    } else {
        fetch(`http://www.omdbapi.com/?apikey=1c768e4f&s=${movieName}`)
            .then(res => res.json())
            .then(movie => {
                document.getElementById("cards").style.display = "none";
                const resultsPage = document.getElementById("resultsPage");
                let arraySize = movie.Search.length;
                for (let i = 0; i < arraySize; i++) {

                    resultsPage.innerHTML +=
                     `<div class="result-item d-flex align-items-center py-3 border-bottom" onclick="openMovie('${movie.Search[i].imdbID}')">
                        <img src="${movie.Search[i].Poster}" class="rounded me-3" width="60" height="90" alt="Poster">

                         <div>
                           <h5 class="mb-1 fw-bold">${movie.Search[i].Title}</h5>
                           <h5 >${movie.Search[i].Year}</h5>
                         </div>
                     </div>
                    `;
                }
            });
    }
}