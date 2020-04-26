/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

// var firebase = require("firebase/app");

// // Add the Firebase products that you want to use
// require("firebase/firestore");
// var firebaseConfig = {
//   apiKey: "AIzaSyD3Kb2A0JuBHKRZbj53eEQ1IraEWBqe6Ow",
//   authDomain: "musician-community.firebaseapp.com",
//   databaseURL: "https://musician-community.firebaseio.com",
//   projectId: "musician-community",
//   storageBucket: "musician-community.appspot.com",
//   messagingSenderId: "415060047558",
//   appId: "1:415060047558:web:fa2be6e6e86482e834c9c7",
//   measurementId: "G-4N61CZSXP7",
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const db = app.firestore();

// export { db };

var express = require("express"); // Express web server framework
var request = require("request"); // "Request" library
var cors = require("cors");
var querystring = require("querystring");
var cookieParser = require("cookie-parser");

var client_id = "2ad16dcab3504b12a8e1da66110a11e9"; // Your client id
var client_secret = "CLIENT_SECRET"; // Your secret
var redirect_uri = "http://localhost:8888/callback"; // Your redirect uri
const path = require("path");
/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function (length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = "spotify_auth_state";

var app = express();
app.set("view engine", "html");

app
  .use(express.static(__dirname + "/public"))
  .use(cors())
  .use(cookieParser());

app.get("/login", function (req, res) {
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = "user-top-read";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

app.get("/sup", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/sup.html"));

  // https://api.seatgeek.com/2/events?client_id=MjExNDQzMDZ8MTU4NTM1Mjc1OC40Mg&performers.slug=
  //https://api.seatgeek.com/2/events?client_id=MjExNDQzMDZ8MTU4NTM1Mjc1OC40Mg&performers.slug=the-strokes
});

app.get("/callback", function (req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      },
      headers: {
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64"),
      },
      json: true,
    };

    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token,
          refresh_token = body.refresh_token;

        var artists = {
          url: "https://api.spotify.com/v1/me/top/artists",
          headers: { Authorization: "Bearer " + access_token },
          json: true,
        };

        // console.log(access_token);
        // use the access token to access the Spotify Web API
        request.get(artists, function (error, response, body) {
          console.log(body.items);
          var top_name = [];
          for (i = 0; i < body.items.length; i++) {
            artist = body.items[i].name;
            top_name.push(artist);
          }
          var string_artists = top_name.join();
          console.log(string_artists);
          console.log(top_name);
          // var top_list = body.items[0].name;

          // we can also pass the token to the browser to make requests from there
          res.redirect(
            "/#" +
              querystring.stringify({
                access_token: access_token,
                refresh_token: refresh_token,
                top_name: string_artists,
              })
          );
        });
      } else {
        res.redirect(
          "/#" +
            querystring.stringify({
              error: "invalid_token",
            })
        );
      }
    });
  }
});

app.get("/refresh_token", function (req, res) {
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        access_token: access_token,
      });
    }
  });
});

// app.get("/get-top-artists", function(req, res) {
//   // Do the api req to spotify
//   // var options = {
//   //   url: "https://api.spotify.com/v1/me/top/artists",
//   //   headers: { Authorization: "Bearer " + access_token },
//   //   json: true
//   // };
//   // request.get(options, function(error, response, body) {
//   //   console.log(body);
//   // });

//   // use the access token to access the Spotify Web API

//   // wait for response
//   // you now have the json object containig all the relevant info about the top artists

//   res.sendFile("topartistspage.html", asdf);

//   // Do the api req to spotify
//   // wait for response
//   // res.send a json object containig all the relevant info about the top artists
// });

console.log("Listening on 8888");
app.listen(8888);
