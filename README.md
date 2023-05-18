# DonateNearby

This project, created while taking a course at Coders Lab, is a website which helps with organising the collection of donated clothes, toys and other aid. To request the pickup of donated aid, the user has to create and account and fill in a multistep form (custom input types). Additionally, a viewer can request a contact, by filling a contact form (communication with fake API).

## Technologies used:
* React;
* React Router v6; 
* React-scroll;
* SCSS; 
* CRA; 
* Material UI; 
* Google Fonts; 
* FontAwesome icons.

### Form:
* Multistep form with multiple custom input types;
* Contact form using fake API (async/await)

### Register an account or login:
Validation:
* Email - validated by regex - example@example.example;
* Password - longer than 6 characters and repeated password must be same;
* Name must have at least one letter;
* Contact form message - between 120 and 500 signs.

### Other:
* Global state management via useContext hook;
* React-scroll for smooth navigation (front page);
* 

#### Caveat:
* The login and registration functionality is performed by useContext hook - demo purpose;
* The form data is using fake API - demo purpose;
* RWD pending:
  * front page - done;
  * Login/register - done;
  * Multistep form is cooking - please set the resolution to 1900 x 962.
* Support statistics - currently static element;


### Shout out to Grzegorz Kowalski - the course mentor.

Check out the webpage at https://neon-melba-638112.netlify.app/