# Database Cachine

## Database Caching Implementation using Firebase Firestore DB and UID-value pair

#### I decided to use Firebase Firestore db as our database. It is a cloud database with clean user interface.

#### First, I initialized db in my index.html using firebase config api information after register the database on firebase site. Next, I obtain user id and their corresponding top artist (array) as UID - Top_Artist pair and store it into the firebase "user" collection. UID as the document value and top_artist as its field value.

#### Sequence Diagram:

```mermaid
sequenceDiagram
Application ->> Spotify Accounts Service: Request Authorization to access data
Spotify Accounts Service->>User: Display scopes and prompt users to login
User ->> Spotify Accounts Service: Redirect the user to the application, passing access token
Spotify Accounts Service->>Application: User Access token in requests to Web API
User ->> Database: Login, Website then store obtained user data from calling spotify API


```

![screenshot](database.png)
