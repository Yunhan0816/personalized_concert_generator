/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

var request = require("request"); // "Request" library

var client_id = "2ad16dcab3504b12a8e1da66110a11e9"; // Your client id
var client_secret = "95216a023621488f92bca78c3e4052d2"; // Your secret

// your application requests authorization
var authOptions = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    Authorization:
      "Basic " + new Buffer(client_id + ":" + client_secret).toString("base64")
  },
  form: {
    grant_type: "client_credentials"
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: "https://api.spotify.com/v1/users/jmperezperez",
      headers: {
        Authorization: "Bearer " + token
      },
      json: true
    };

    // var topArtists = {
    //   url: "https://api.spotify.com/v1/me/top/artists",
    //   headers: {
    //     Authorizatison: "Bearer" + token
    //   },
    //   json: true
    // };
    request.get(options, function(error, response, body) {
      console.log(body);
    });
    // request.get(topArtists, function(error, response, artists) {
    //   console.log(artists);
    // });
  }
});
