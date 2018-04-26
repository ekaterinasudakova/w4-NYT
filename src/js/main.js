console.log(`Hello World from app.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)


const APIKEY = "de824ad9d9b141e8bef4cbd433243ae0";
const APIBASE = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKEY;

let $articles = document.querySelector(".articles");

axios.get(APIBASE).then(function(response){
	console.log(response.data);
	if(response.data.status !== "OK"){
		console.warn("shit's going down")
	}
})

response.data.response.docs.forEach(article => {
	console.log(article)

	let $li = document.createElement("li");
	$li.innerHTML = article.headline.main;
	$articles.appendChild($li);
})