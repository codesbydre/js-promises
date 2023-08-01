// ## **Part 2: Deck of Cards**

// 1. Make a request to the [Deck of Cards API](http://deckofcardsapi.com/) to request a single card from a newly shuffled deck. Once you have the card, ***console.log*** the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
const baseURL = "https://deckofcardsapi.com/api/deck";

$.getJSON(`${baseURL}/new/draw/?count=1&json`).then((data) => {
  let card = data.cards[0];
  console.log(`${card.value} of ${card.suit}`);
});

// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the **same** deck.

//     Once you have both cards, ***console.log*** the values and suits of both cards.
$.getJSON(`${baseURL}/new/draw/?count=1&json`).then((data) => {
  let card = data.cards[0];
  console.log(`${card.value} of ${card.suit}`);

  let deckId = data.deck_id;
  $.getJSON(`${baseURL}/${deckId}/draw/?count=1&json`).then((data) => {
    let card = data.cards[0];
    console.log(`${card.value} of ${card.suit}`);
  });
});

// 3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.
$.getJSON(`${baseURL}/new/shuffle/?deck_count=1`).then((data) => {
  let deckId = data.deck_id;

  // Event listener for button click
  $("#drawCard").click(() => {
    $.getJSON(`${baseURL}/${deckId}/draw/?count=1`).then((data) => {
      if (data.remaining == 0) {
        $("#drawCard").attr("disabled", true);
      }

      let card = data.cards[0];
      $("#cardResult").text(`${card.value} of ${card.suit}`);
    });
  });
});
