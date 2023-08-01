// ## **Further Study**

// 1. Figure out how to make a single request to the [Pokemon API](https://pokeapi.co/) to get names and URLs for every pokemon in the database.
const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=10000";

$.getJSON(baseURL).then((data) => {
  let pokemon = data.results;
  console.log(pokemon);
});
// 2. Once you have names and URLs of all the pokemon, pick three at random and make requests to their URLs. Once those requests are complete, ***console.log*** the data for each pokemon.
$.getJSON(baseURL).then((data) => {
  let pokemon = data.results;

  for (let i = 0; i < 3; i++) {
    let randomIdx = Math.floor(Math.random() * pokemon.length);
    let randomPoke = pokemon[randomIdx];

    $.getJSON(randomPoke.url).then((data) => {
      console.log(data);
    });
  }
});

// 3. Start with your code from 2, but instead of logging the data on each random pokemon, store the name of the pokemon in a variable and then make another request, this time to that pokemon’s ***species*** URL (you should see a key of ***species*** in the data). Once *that* request comes back, look in the ***flavor_text_entries*** key of the response data for a description of the species written in English. If you find one, ***console.log*** the name of the pokemon along with the description you found.

//     Example: “ducklett: They are better at swimming than flying, and they happily eat their favorite food, peat moss, as they dive underwater.”
$.getJSON(baseURL).then((data) => {
  let pokemon = data.results;

  for (let i = 0; i < 3; i++) {
    let randomIdx = Math.floor(Math.random() * pokemon.length);
    let randomPoke = pokemon[randomIdx];

    $.getJSON(randomPoke.url).then((data) => {
      let speciesURL = data.species.url;
      let name = data.name;

      $.getJSON(speciesURL).then((data) => {
        let description = data.flavor_text_entries.find(
          (entry) => entry.language.name === "en"
        );
        console.log(`${name}: ${description.flavor_text}`);
      });
    });
  }
});

// 4. **BONUS** Instead of relying on ***console.log***, let’s create a UI for these random pokemon. Build an HTML page that lets you click on a button to generate data from three randomly chosen pokemon. Include the name of the pokemon, an image of the pokemon, and the description of its species which you found in 3.
