function getnews() {

    document.querySelector(".all").style.display = "block";


    $.ajax({
        url:"https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=60637ad444a04b5288c4890704a45325",

        success: function (data) {
            console.log(data);
            let newsContainer = document.querySelector(".all");
            for (var i = 0; i < data.articles.length; i++) {
                newsContainer.innerHTML += 
            `<div class="main">
            <a href="${data.articles[i].url}">
                <div>
                 <img class="img" src="${data.articles[i].urlToImage}">
                </div>
                <div id="para">
                    <p class="author">${data.articles[i].author}</p>
                    <p class="title">${data.articles[i].title}</p>
                   
                </div>
                </a>
            </div>`;
                
           
        }
            },
            
        error: function (err) {
            alert("Try Again!!!");
            
        }


    });

}