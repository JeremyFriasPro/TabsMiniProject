const allTabs = document.querySelectorAll(".tab");
const usaTab = document.querySelector("#usa");
const cubTab = document.querySelector("#cub");
const dorTab = document.querySelector("#dor");
const tabInfo = document.querySelector(".tab-info");

class Country {
	constructor(name, year, population) {
		this.name = name;
		this.year = year;
		this.population = population;
	}

	formatPop() {
		const options = {
			style: "decimal",
			minimumFractionDigits: 0,
			maximumFractionDigits: 2,
		};

		const formattedNumber = this.population.toLocaleString("en-US", options);
		return formattedNumber;
	}
}

const places = [
	new Country("United States", 1776, 332000000),
	new Country("Cuba", 1902, 11000000),
	new Country("Dominican Republic", 1844, 10800000),
];

function showLocationInfo(location) {
	const country = `${location.name} (Country)`;
	const year = `Founded in ${location.year}`;
	const population = `with a current population of over ${location.formatPop()} people.`;

	function fillElements() {
		const headingForCountry = document.querySelector("#place");
		const headingForYear = document.querySelector("#founded");
		const paragraphForPopulation = document.querySelector("#people");

		headingForCountry.innerText = country;
		headingForYear.innerText = year;
		paragraphForPopulation.innerText = population;

		const infoElements = [
			headingForCountry,
			headingForYear,
			paragraphForPopulation,
		];

		infoElements.forEach((info) => {
			append2Element(info);
		});

		function append2Element(element) {
			tabInfo.append(element);
		}
	}

	fillElements();
}

usaTab.addEventListener("click", function (event) {
	event.preventDefault();
	showLocationInfo(places[0]);
	usaTab.style.backgroundColor = "rgb(113, 125, 226)";
	cubTab.style.backgroundColor = "rgb(233, 233, 233)";
	dorTab.style.backgroundColor = "rgb(233, 233, 233)";
});

cubTab.addEventListener("click", function (event) {
	event.preventDefault();
	showLocationInfo(places[1]);
	usaTab.style.backgroundColor = "rgb(233, 233, 233)";
	cubTab.style.backgroundColor = "rgb(113, 125, 226)";
	dorTab.style.backgroundColor = "rgb(233, 233, 233)";
});

dorTab.addEventListener("click", function (event) {
	event.preventDefault();
	showLocationInfo(places[2]);
	usaTab.style.backgroundColor = "rgb(233, 233, 233)";
	cubTab.style.backgroundColor = "rgb(233, 233, 233)";
	dorTab.style.backgroundColor = "rgb(113, 125, 226)";
});
