console.log("Let's get this party started!");

const $gifArea = $("#gifArea");
const $gifSearch = $("#search");

async function getRandomGif(searchTerm){
    const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=mIq2P9GzXfzF8POWxDUSyIGFsMJfBZRV`;
    const res = await axios.get(url);
    const gifs = res.data.data;
    const randomIdx = Math.floor(Math.random() * gifs.length);
    const $newGif = $("<img>", {src: gifs[randomIdx].images.original.url});
    $gifArea.append($newGif);
}


$("#gifForm").on("submit", function(e){
    e.preventDefault();
    const searchTerm = $gifSearch.val();
    getRandomGif(searchTerm);
});

$("#remove").on("click",function(e){
    e.preventDefault();
    $gifArea.empty();
    $gifSearch.val('');
});
