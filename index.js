/**
 * Challenge: get a random image from Unsplash and set it as the background
 *
 * Part 1:
 *
 * URL: https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature
 * (You can change the "query" at the end to whatever theme you want)
 *
 * Change the body's backgroundImage to:
 * `url(<insert the URL of the iamge from the API here>)`
 *
 * (You may need to dig around the response body a bit to find this URL)
 *
 * (Note I've already added some CSS to resize the image within the window.
 * Instructions for this were found on CSS Tricks:
 * https://css-tricks.com/perfect-full-page-background-image/#awesome-easy-progressive-css3-way)
 */

fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=winter",
  {
    method: `GET`,
  }
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.urls.full);
    // document.getElementById(`background`).innerHTML = `<img src="${data.urls.full}"/>`;
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.getElementById(
      "author"
    ).textContent = `Image by: ${data.user.name}`;
  })
  .catch((err) => {
    console.log(`something went wrong!`);
    //this is where I can handle the error or replace it with
    //something like a default background image for example
    //or tell user something went wrong do a page refresh
    document.getElementById(`background`).innerHTML = `<img src="winter.jpg"/>`;
    // document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`
    alert(`Something went wrong try refreshing`);
  });
//here we made it so that if it catches an error it logs it to the console, puts up a default pic, and alerts the user to refresh

//here we do console.log(data) to examine our api data
//you can see the full url for the picture in
//data.urls.full

/*
This whole thing comes out from console.log(data)
So this whole thing below is in data
To find our picture we look throught the urls
There we see a link for full
so our data we're looking for is
data.url.full

  {id: 'gxt05XHaQ9Q', created_at: '2016-09-04T06:01:15-04:00', 
  updated_at: '2022-03-17T00:00:53-04:00', 
  promoted_at: '2016-09-04T06:01:15-04:00', 
  width: 4288, …}
  alt_description: "photography of white grass field"
  blur_hash: "LdM%_@ofM{j[_NWBayayIUj[WBay"
  categories: []
  color: "#d9d9d9"
  created_at: "2016-09-04T06:01:15-04:00"
  current_user_collections: []
  description: nulldownloads: 72802exif: 
  {make: 'NIKON CORPORATION', model: 'NIKON D300S', 
  name: 'NIKON CORPORATION, NIKON D300S', 
  exposure_time: '1/3200', 
  aperture: '1.8', …}
  height: 2848id: "gxt05XHaQ9Q"
  liked_by_user: 
  falselikes: 1316links: 
  {self: 'https://api.unsplash.com/photos/gxt05XHaQ9Q', 
  html: 'https://unsplash.com/photos/gxt05XHaQ9Q', 
  download: 'https://unsplash.com/photos/gxt05XHaQ9Q/download?i…wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc1MzgxODE', 
  download_location: 'https://api.unsplash.com/photos/gxt05XHaQ9Q/downlo…wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc1MzgxODE'}
  location: {title: 'Lithuania', name: 'Lithuania', 
  city: null, country: 'Lithuania', 
  position: {…}}promoted_at: "2016-09-04T06:01:15-04:00"
  sponsorship: nulltopic_submissions: {textures-patterns: {…}}
  updated_at: "2022-03-17T00:00:53-04:00"
  
  urls: {
        raw: 'https://images.unsplash.com/photo-1472983131032-23…HJhbmRvbXx8fHx8fHx8fDE2NDc1MzgxODE&ixlib=rb-1.2.1', 
        full: 'https://images.unsplash.com/photo-1472983131032-23…RvbXx8fHx8fHx8fDE2NDc1MzgxODE&ixlib=rb-1.2.1&q=85', 
        regular: 'https://images.unsplash.com/photo-1472983131032-23…Hx8fHx8fDE2NDc1MzgxODE&ixlib=rb-1.2.1&q=80&w=1080', 
        small: 'https://images.unsplash.com/photo-1472983131032-23…fHx8fHx8fDE2NDc1MzgxODE&ixlib=rb-1.2.1&q=80&w=400', 
        thumb: 'https://images.unsplash.com/photo-1472983131032-23…fHx8fHx8fDE2NDc1MzgxODE&ixlib=rb-1.2.1&q=80&w=200', 
        …}
  
  
  user: {id: 'krB3UpGsFQ8', 
  updated_at: '2022-03-06T17:26:40-05:00', username: 'ernesta_vala', name: 'Ernesta Vala', 
  first_name: 'Ernesta', …}
  views: 9034620
  width: 4288[[Prototype]]: Object
  */

/**
Challenge: Get current data on a cryptocurrency from the list below
    * bitcoin
    * dogecoin
    * ethereum
    * litecoin

1. Search the API docs for an endpoint that will 
   get you the "current data for a coin"
   (https://www.coingecko.com/api/documentations/v3#/)

2. Execute a test request from the API docs and skim through 
   the data for anything that you may find interesting to use
   in the dashboard
*/

fetch("https://api.coingecko.com/api/v3/coins/bitcoin", {
  method: `GET`,
})
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    console.log(res.status);
    return res.json();
  })
  .then((data) => {
    document.getElementById(
      `crypto-top`
    ).innerHTML = `<img src=${data.image.small}/>
    <span>${data.name}</span>`;

    document.getElementById(
      `crypto`
    ).innerHTML += `<p> Current: $${data.market_data.current_price.usd}</p>
    <p> High: $${data.market_data.high_24h.usd} </p>
   <p> Low: $${data.market_data.low_24h.usd}</p>`;
    console.log(data);
  })
  .catch((err) => console.error(err));

//you can manually throw an error by doing
//throw Error(`This is an error`)
//res.ok tells us if we receoved response we expected
//anything in 400 or 500 range of http statuses will have as res.ok of false

//to get current time
function getCurrentTime() {
  const date = new Date();

  (document.getElementById(`time`).textContent =
    date.toLocaleTimeString("en-us")),
    { timeStyle: "short" };
}
setInterval(getCurrentTime, 1000);
//this uses the getCurrentTime function and sets a 1 second interval so it updates each second

// function getCurrentTime() {
//     const date = new Date()
//     document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
// }

// setInterval(getCurrentTime, 1000)

/**
 * Challenge: Learn how to access the user's coordinates
 * by using the Geolocation Web API!
 *
 * Log the user's position to the console.
 */

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
});

navigator.geolocation.getCurrentPosition((position) => {
  console.log(`${position.coords.latitude},${position.coords.longitude}`);
});

navigator.geolocation.getCurrentPosition((position) => {
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`
  )
    .then((res) => {
      if (!res.ok) {
        throw Error(`Weather data not available`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById(
        `weather`
      ).innerHTML = `<img src=${iconUrl}> </img>
      <p class="weather-temp"> ${Math.round(data.main.temp)} </p>
      <p class="weather-city"> ${data.name} </p>
      `;
      console.log(iconUrl);
      console.log(data.main.temp);
      console.log(data.name);
    })
    .catch((err) => console.error(err));
});

// coords: GeolocationCoordinates
// accuracy: 1780.944750259707
// altitude: null
// altitudeAccuracy: null
// heading: null
// latitude: 33.3424507
// longitude: -111.9880315
// speed: null
// [[Prototype]]: GeolocationCoordinates
// timestamp: 1647976368803
// [[Prototype]]: GeolocationPosition
// coords: (...)
// timestamp: (...)
