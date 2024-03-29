# startup

[notes](https://github.com/SoftCottage/startup/blob/main/notes.md)

# Elevator pitch

  You want more. You will never get satisfied, because enough is never enough. So what do you do? You seize what you can take. You horde as much as you can in an attempt to collect them all. What you take is yours. Until it isn't. That's because what's your's can be their's. And what's their's can be your's. All you have to do is take it. Quickly. Nevermind what it is, nevermind what it represents, stake your claim. With over 200,000 words in the English language, you have a lot of words to type if you want to own them all before someone else does. Any word you type becomes yours. If someone else previously typed and owned that word, congrats you kleptomaniac, you've stolen it. Beware, they will know it is missing. They will know becuase we will immediately notify them. If they are on that is. So time your theivery and climb the up-to-date leaderboard to become the KleptoKing.

# Design

![IMG_247A5E8AB51C-1 - Design concept for KleptoKing](https://github.com/SoftCottage/startup/assets/114368794/83ef2c63-88bd-4a63-9afa-03a8dcd484f1)

# Key Features

* Secure login over HTTPS
* Ability to type a word to claim it
* Ability to steal a word from another player
* Real time notifications of stolen words
* Storage of all currently owned words
* Leaderboard of top users displayed at all times

# Technologies

* HTML - Uses correct HTML structure for application. Two HTML pages. One for login and one for typing words. 
* CSS - Application styling that looks good on different screen sizes, nice background, no annoying font.
* JavaScript - Provides login, current word display, leaderboard display, stolen word notification display.
* Service - Backend service with endpoints for:
  - login
  - claiming words
  - retrieving claimed words
  - retrieving leaderboard and placement
* DB/Login - Store users, words and placement in database. Register and login users. Credentials securely stored in database. Can't claimn words unless authenticated.
* WebSocket - As each user claims words, their progress is broadcast to other players. If a word you own is stolen you are privately notified 
* React - Application ported to use the React web framework.

# HTML Deliverable

For this deliverable I built out the structure of my application using HTML.

* HTML pages - Three HTML pages:
  - Home page with login
  - Play page
  - About page
* Tags - Used to make a table for the Leaderboard, as well as separate the headers (nav), main and footer
* Links - The header on each page links to all pages
* Text - All of the words make up the text of this application
* 3rd Party - Word of the day will use 3rd party service call. Current placeholder
* Images - The about page will have a different image each day with along with the word of the day. Current placeholder
* Login - Login placeholder, username and password
* Database - Input box for stealing words from the database. You also have your own Wordbank database of words. 
* WebSocket - real time notifications of stolen words and leaderboard
