

let fillInSearchBar = document.querySelector("#search-bar");
let searchButton = document.getElementById("search-button");
let randomSearchButton = document.getElementById("random-search-button");
const logo = document.querySelector("#main-image");
const country = document.querySelector('#main-footer-country h2');
const countryContainer = document.querySelector('#main-footer-country'); 

searchButton.addEventListener('click', () => {
    fillInSearchBar.value = "I clicked the search button!"; 
});


randomSearchButton.addEventListener('click', () => {
    fillInSearchBar.value = "I clicked on the random search button!";
    if (logo.style.cssText === "transform: scaleX(-1);") {
        return (logo.style.cssText = "transform: scaleX(1);");
    } else {
        return (logo.style.cssText = "transform: scaleX(-1)");
    }
});


country.addEventListener('mouseover', () => {
    country.innerHTML = 'China';
});

country.addEventListener('mouseleave', () => {
    country.innerHTML = 'Switzerland';
});

countryContainer.addEventListener('click', () => {
    const node = document.createTextNode("Wohoo we're almost done!");
    countryContainer.appendChild(node);
})