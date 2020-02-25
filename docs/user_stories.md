# User Stories

## Primary User Story: Landing & Login Page (Google Oauth)

A user first reaches our website landing page. The landing page displays the name of the website, a button called “stay connected with other musicians” and a profile icon. The user can either click on the button to continue to the next pages to connect with other musicians (if they are already logged in), or they click on the profile icon to log in or sign up ( if he or she does not have an account). This will redirect them to a Google login page that allows the user to log in with google account.

When things go on the right track: Users log in with their correct google account. After logging in, they will be directed to the home page with further functions await.
When things go on the wrong track: Users entered any account that is not associated with a google account will encounter an error message saying that the user account doesn’t exist. All the failed attempts will result in going back to the login page.

## Primary User Story: Connect with other musicians

Once the user is successfully logged in, he will be asked to enter what instrument they play, e.g. bass, and the user will then be asked to connect their account with their Spotify account.
This will then automatically store the user’s top 10 most frequently played artists into the database. Based on the data stored in our database, the user will be able to see a directory of other users with the number of mutual favorite artists, and what instruments they play. The user can send friend invitations to anyone, they can also filter out unwanted types of musicians based on what instruments they play. If the receiver passes the invitation, they will officially build a connection. The connection allows friends to communicate with each other and see each others’ posts and interact with each post.
When things go on the right track: The homepage will then show a filter list of musicians based on how many mutual favorite artists they have in descending order.
When things go on the wrong track: A modal pops out saying that “you need to sign up for a Spotify account to utilize our application” then direct them to Spotify page to create an account.

#### Secondary User Story:

Connect with other musicians (map view)
A user will also be able to see nearby users on a google map. If they hover on a specific marker on the map indicating a specific musician, they will be able to see more detail of this user: top 10 most frequently listened artists and what instruments they play.

## Primary User Story: Post

A separate internal page that shows the posts from users. Consisting of two parts, posts from random users and posts from connected friends. The post can be recorded audio or video of the users.
When things go on the right track: Nothing can possibly goes wrong in this section except that if the users have not established even one connection then, in this case, the section of posts of friends would be blank.

Secondary User Story: Collaboration between musicians
Under each post, users can comment or like these posts. The purpose of this second section is to build virtual connections between musicians.
When things go on the right track: Nothing can possibly go wrong here.
