const searchButton = document.querySelector(".search-btn");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
});

// Adding Map
let map = L.map("map", {
  center: [51.505, -0.09],
  zoom: 13,
  zoomControl: false,
});

const myIcon = L.icon({
  iconUrl: "./dist/images/icon-location.svg",
  iconSize: [40, 50],
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

L.marker([51.5, -0.09], { icon: myIcon }).addTo(map);
