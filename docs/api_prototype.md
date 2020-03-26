# API Prototype

## Tech Stack and the process of implementation: Landing & Login Page (Spotify OAuth)

#### At first I implemented the frontend with VUE.js, and attempted to add Spotify OAuth with express on the server.js. However, Vue has router.js, which act similarly to the server.js, and it rather confused me very easily. Hence, I decided to switch to using HTML and expressJS to implement a simple Spotify OAuth page with Spotify login.

#### I followed the spotify Authorization Code Flow on https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow

#### In app.js, the Spotify OAuth is done and then the access_token is obtained. I use the obtained access_token to then send Spotify web api calls to get json object of user's top artists list.

#### After Loggin in successfully, the page will redirect to http://localhost:8888/callback, which shows the user information, as well as the parsed json object containing the top artist list of that specific user.
