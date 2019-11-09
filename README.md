# User Interactive Project Piano/Simon Game

This project represents a website the main focus of which is a piano keyboard. It allows users to play simple tunes as well as play a game called Simon.
The piano has a 15-key keyboard with notes from C(middle C or C4) to D(D5) with their name written on the white keys.
the Simon game is a memory game. The main object of the game is correctly repeat a sequence of keys, which become longer and longer with each level. 
This website built for educational, memory training and entertaiment purpose.

## UX

This website target audiences are those who wish to play piano and learn basic notes in a fun easy way. The website is suitable for children as it is interactive and colourful. The notes on the keys makes it easy to read and memorise. The game mode of the piano helps with the practice of music hearing and memory at the same time.

#### User story:
**1. Keyboard**
  * User presented with a set of piano keys and buttons.
  * User can read how to play keyboard by pressing !["How to play keyboard"](assets/images/how-piano.png) button.
  * Any time user presses the key it lights up and plays a sound corresponding to the piano note.
  * At any time user can choose to play game by pressing !["Play game"](assets/images/play-game.png) button.

**2. Game**
  * The user presented with a set of piano keys and buttons.
  * User can read how to play game by pressing !["How to play game"](assets/images/how-game.png) button.
  * To start the game user will press the !["Start Game"](assets/images/start-game.png) button.
  * The user presented with series of random key lit-ups and can hear sound that corresponding to each key.
  * Each time the user presses a key it lights up and plays a sound.
  * When the correct series of keys are pressed, the user can see the same series of key lit-ups but with additional key.
  * If the wrong key is pressed, the user get notified by a beeping sound and a triple exclamation mark in the level button ![text in a level button](assets/images/warning.png). 
  Series of key lit-ups are repeated to remind the user of the pattern so that the user can try again.
  *In the level button user can see how many steps are in the current series of keys.
  * The "Restart" button !["Restart" button](assets/images/restart.png) allows the user to restart the game.
  * The user can win the game by repeating 20 series of keys correctly. The user get notified of the victory by a cheering sound and a text "YOU WON!!!" in the level button !["You won!!!"](assets/images/you-won.png).
  *  At any time user can choose to play keyboard by pressing !["Play keyboard"](assets/images/play-piano.png) button. 

**3. Contact**
  * The user presented with contact form.
  * If the user wants to contact website creator the user can complete the form by filling in all the required fields and pressing  !["Send email"](assets/images/send-email.png) button.
  
  * Alert box with a message "Thanks! Your email has been sent!" will appear on a screen.

## Wireframes
Wireframes are created in Balsamiq Cloud.

Check wireframes for desktop: [index.html](assets/wireframes/index_html_desktop.png), [piano.html](assets/wireframes/piano_html_desktop1.png), [game.html](assets/wireframes/game_html_desktop1.png), [contact.html](assets/wireframes/contact_html_desktop1.png).

Check wireframes for mobile devices: [index.html](assets/wireframes/index_html_mobile.png), [piano.html](assets/wireframes/piano_html_mobile.png), [game.html](assets/wireframes/game_html_mobile.png), [contact.html](assets/wireframes/contact_html_mobile.png).

## Features

#### Existing Features

* Header drop-down menu;
* Button-links;
* User interactive piano keyboard;
* Plays audios;
* Footer links to website pages;
* Contact form is connected to email service;
* Mobile-ready version - Responsive website design;
* Social media integration.  There are Icons/links in the Footer to social media accounts of the website creator.

* In a game mode user have to successfully pass 20 levels to win the game. I think game will benefit     from integrating a drop-down menu for choosing a level of difficulty: easy - 5 levels, intermediate - 10 levels, hard - 15 levels, advanced - 20 levels. 

#### Features Left to Implement

* Social media links;

## Technology Used

* HTML5;
* CSS3;
* Bootstrap (v4.1);
* Javascript;  
* JQuery;
* Visual Studio Code;
* GitHub;

## Testing
* The HTML code was checked with online validator:(https://validator.w3.org/#validate_by_input);
* The CSS code was checked with online validator: (https://jigsaw.w3.org/css-validator/#validate_by_input);
* The Javascript code was checked with online validators: (https://www.jslint.com/), (https://jshint.com/);
* Responsiveness was checked with online validator: (https://www.responsinator.com/);
* The Chrome Developer Tools was used to check website for responsiveness and its console to check Javascript.


| Test               | Input              | Expected Output    |Pass    |  
| --------------     | ----------------- | ------------------- | :--------:|
|![](assets/images/play-game.png) | Click "Play Game" button | Should open game.html page | *Yes* |
|![](assets/images/play-piano.png) | Click "Play Piano" button | Should open piano.html page | *Yes* |  
|![](assets/images/start-game.png) | Click "Start Game" button | User should be able to start the game | *Yes* |  
|![](assets/images/restart.png) | Click "Restart" button | User should be able to refresh the page where game can be started again | *Yes* |
|![](assets/images/how-game.png) | Click "How to play Game" button | Should open a manual on how to play game. On second click manual should close.  |  *Yes* |
|![](assets/images/how-piano.png) | Click "How to play Keyboard" button | Should open a manual on how to play piano keyboard. On second click manual should close. | *Yes* |
|![](assets/images/menu-botton.png) | Click navbar collapsed menu button | Should open dropdown menu with a list of links to pages. | *Yes* |
|![](assets/images/cross-botton.png) | Click cross button | Should close dropdown menu. | *Yes* |
|![](assets/images/dropdown-menu.png) |  <ul><li>Click "Home"</li><li>Click "Piano"</li><li>Click "Game"</li><li>Click "Contact"</li></ul> | <ul><li>Should open index.html</li><li>Should open piano.html</li><li>Should open game.html</li><li>Should open contact.html</li></ul> | <ul><li>*Yes*</li><li>*Yes*</li><li>*Yes*</li><li>*Yes*</li></ul> |
**Piano keys** | Click on any piano key | <ul><li>User should be able to see a key colour flash</li><li>User should be able to hear sound</li> | <ul><li>*Yes*</li><li>*Yes*</li></ul> | 
**Navigation Links in Footer** | <ul><li>Click "Home"</li><li>Click "Piano"</li><li>Click "Game"</li><li>Click "Contact"</li></ul> | <ul><li>Should open index.html</li><li>Should open piano.html</li><li>Should open game.html</li><li>Should open contact.html</li></ul> | <ul><li>*Yes*</li><li>*Yes*</li><li>*Yes*</li><li>*Yes*</li></ul> |
![](assets/images/send-email.png) | Click "Send email" button | Alert box with message "Thanks! Your email has been sent!" should appear on a screen.  | *Yes* | 

The website was tested on a laptop, android and ios mobile devices that include phones, tablet and ipad. 

During the testing of the website hosted on GitHub Pages, there was a problem when playing of sounds was delayed, which badly effected use of the game and the keyboard. I think its due to internet connection, because sounds didn't delay when website was open from local editor. 

## Deployment

This project was edited in Visual Studio Code on a local device. To preview website in VS Code - right click inside html file and choose "Open in default browser". Preview README.md press Ctrl + Shift + V.

The code was copied from Visual Studio Code to AWS Cloud9,pushed from there and stored in GitHub repository. To deploy a website to the public Internet we are using GitHub's free service called GitHub Pages.
Deployment of the website was done from GitHub repository of the project by clicking the "Settings" and choosing "master branch" from the dropdown menu in "Source" section within "GitHub Pages" section.  
[Click to view website.](https://digitalis75.github.io/User-Interactive-Project-Piano-Simon-Game/).  
 The website is automatically updated with every change in repository. 

## Credit

#### Content
* [Google fonts](https://fonts.google.com/?category=Serif&query=roboto);  
* [Font Awesome](https://fontawesome.com/);
* [EmailJS](https://www.emailjs.com/)

#### Code
* Header dropdown menu: https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp;
* Canvas: https://www.w3resource.com/html5-canvas/html5-canvas-gradients-patterns.php, https://www.w3schools.com/html/html5_canvas.asp;
* How to play buttons: https://getbootstrap.com/docs/4.3/components/collapse/
* Keyboard: https://www.youtube.com/watch?v=Cxz8kj3U6PQ&t=118s;
* Game: https://www.youtube.com/watch?v=4pfvy_A5ceE, https://www.youtube.com/watch?v=9MTR3V2XpRI, https://www.youtube.com/watch?v=iXscqYgZ7HQ&t=621s;

#### Images
Background image: https://www.shutterstock.com/image-vector/vector-background-colorful-hands-339652463;
 

#### Media 
  * Keyboard key sounds: https://drive.google.com/file/d/1iKVL4MMMw9ur2h3HUDA-_qwnehT3Z2M1/view;
  * Beep sound: https://www.soundjay.com/beep-sounds-1.html;
  * Winner sound: https://www.freesoundeffects.com/free-track/happykids-426842/

#### Acknowledgements 
* Video tutorials of Code Institute and examples of introduced code;
* HTML, CSS, Bootstrap4, JavaScript, jQuery tutorials at [w3schools.com](https://w3schools.com/);  
* [Bootstrap Documentation](https://getbootstrap.com/docs/4.3/getting-started/introduction/);
* [EmailJS Documentation](https://www.emailjs.com/docs/)
* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet);
