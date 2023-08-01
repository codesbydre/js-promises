// ## ****Part 1: Number Facts****

// 1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the ***json*** query key, specific to this API. [Details](http://numbersapi.com/#json).
const baseUrl = "http://numbersapi.com";
let favoriteNum = 9;

$.getJSON(`${baseUrl}/${favoriteNum}?json`).then((data) => {
  console.log(data);
});

// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
let favoriteNums = [3, 7, 9];
$.getJSON(`${baseUrl}/${favoriteNums}?json`).then((data) => {
  console.log(data);
});

// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

//     *(Note: You’ll need to make multiple requests for this.)*
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseUrl}/${favoriteNum}?json`);
  })
).then((facts) => {
  facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
});
