import { IpSearch } from "./ipsearch.js";
import { ipAddress } from "./ipaddress.js";

const ip = new IpSearch();
const ipAddr = new ipAddress();

const searchButton = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");

const cardOptions = document.querySelector(".card-wrapper");

cardOptions.style.display = "none";

let coordinates = [,];

// Get IP Address from Search Bar
searchButton.addEventListener("click", searchButtonHandler);

async function searchButtonHandler(event) {
  event.preventDefault();

  // Set the ip address value from search bar
  ipAddr.setIpAddress(searchBar.value);

  // If no valid address entered
  if (ipAddr.validateIpAddress()) {
    console.log("Please enter valid ip address");
  } else {
    await updateScreen(ip.getCity(ipAddr.getIpAddress()));
  }
}

// Update the card using the data from json
async function updateCard(json) {
  const ipAddressField = document.querySelector(".ip-address-field ");
  const locationField = document.querySelector(".location-field ");
  const timezoneField = document.querySelector(".timezone-field ");
  const ispField = document.querySelector(".isp-field ");

  ipAddressField.textContent = json.ip;
  locationField.textContent = `${json.location.city}, ${json.location.region}`;
  timezoneField.textContent = `UTC ${json.location.timezone}`;

  ispField.textContent = json.isp;

  cardOptions.style.display = "grid";
}

// Update the map using the lat and long co-ordinates
async function updateMap(coordinates) {
  // Adding Map
  let map = L.map("map", {
    center: coordinates,
    zoom: 15,
    zoomControl: false,
  });

  // Change the icon of map
  const myIcon = L.icon({
    iconUrl: "./dist/images/icon-location.svg",
    iconSize: [40, 50],
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  L.marker(coordinates, { icon: myIcon }).addTo(map);
}

// Update the screen using the data from promise
async function updateScreen(promise) {
  const json = await promise;

  await updateCard(json);

  coordinates[0] = json.location.lat;
  coordinates[1] = json.location.lng;
  await updateMap(coordinates);
}
