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



function openMovie(name) {
    fetch(`https://www.omdbapi.com/?apikey=51154c5d&t=${name}`).then(res => res.json()).then(movie => {
        let singlePage = document.getElementById("singlePage");
        document.getElementById("cards").style.display = "none";
        document.getElementById("resultsPage").style.display = "none";
        singlePage.style.display = "block";
        singlePage.innerHTML = "";
        singlePage.innerHTML =
     `<div class="movie-container">
    <div class="movie-card shadow">

        <!-- Poster -->
        <div class="poster">
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'images/no-poster.png'}" />

        </div>

        <!-- Movie Details -->
        <div class="movie-details">

            <h1 class="movie-title">${movie.Title}</h1>

            <p class="sub-info">
                <span>${movie.Year}</span> • 
                <span>${movie.Runtime}</span> • 
                <span>${movie.Genre}</span>
            </p>

            <div class="rating-box">
                 <span class="rating">${movie.imdbRating}</span> / 10
            </div>

            <p class="rating-value">Rating Value: ${movie.Ratings[0]?.Value || "N/A"}</p>

            <h3 class="released">Released: ${movie.Released}</h3>

            <p class="actors"><strong>Actors:</strong> ${movie.Actors}</p>

            <p class="plot">${movie.Plot}</p>

            <button class="btn btn-primary mt-3" onclick="goBack()">⬅ Back</button>

        </div>
    </div>
</div>
`
    })
}

function goBack() {
    const singlePage = document.getElementById("singlePage");
    const cards = document.getElementById("cards");
    const resultsPage = document.getElementById("resultsPage");

    singlePage.innerHTML = "";
    singlePage.style.display = "none";
    cards.style.display = "block";
}

function Search() {
    let movieName = document.getElementById("search").value.trim();

    if (movieName == "") {
        alert("Enter movie name first");
    } else {
        const resultsPage = document.getElementById("resultsPage");
        resultsPage.innerHTML = "";
        resultsPage.style.display = "block";
        document.getElementById("cards").style.display = "none";
        document.getElementById("singlePage").style.display = "none";

        fetch(`https://www.omdbapi.com/?apikey=1c768e4f&s=${encodeURIComponent(movieName)}`)
            .then(res => res.json())
            .then(movie => {
                if (!movie || movie.Response === "False" || !movie.Search) {
                    resultsPage.innerHTML = `<p class=\"text-light\">No results found for '${movieName}'.</p>`;
                    return;
                }

                let arraySize = movie.Search.length;
                for (let i = 0; i < arraySize; i++) {
                    const item = movie.Search[i];
                    const safeTitle = item.Title.replace(/'/g, "\\'");
                    resultsPage.innerHTML +=
                        `<div class="result-item d-flex align-items-center py-3 border-bottom" onclick="openMovie('${safeTitle}')">
                        <img src="${item.Poster !== 'N/A' ? item.Poster : 'images/no-poster.png'}" class="rounded me-3" width="60" height="90" alt="Poster">

                         <div>
                           <h5 class="mb-1 fw-bold">${item.Title}</h5>
                           <h5 >${item.Year}</h5>
                         </div>
                     </div>`;
                }
            });
    }
}