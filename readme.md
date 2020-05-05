## TomOffice

You can check project online by clicking that [link](https://tomoffice.herokuapp.com/).
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

TomOffice is MERN STACK project of online shop that sells furniture for office. There is a possibility to open a new account, find stuff you are looking for, and purchase it online. Design of the project was inspired from [agatameble.pl](https://www.agatameble.pl/) I also get all the furniture details from their website, of course my version was coded in 100% by myself.

#### Running

To run this application, you need to clone the repository, then install both, client and server packages using npm. For some funcionalities like database, authentication or stripe u need to create config.env file in the root of the project. There is a list of dependencies you should create in that file to get access to all basic development functionalities

- NODE_ENV = development
- PORT = 5000
- DATABASE = Link to database
- DATABASE_PASSWORD = DB password
- JWT_SECRET = examplesecret
- JWT_EXPIRES_IN = 5d
- JWT_COOKIE_EXPIRES_IN = 2
- STRIPE_SECRET_KEY = secret key stripe
- EMAIL_USERNAME = mailtrap username
- EMAIL_PASSWORD = mailtrap password
- EMAIL_HOST = mailtrap host
- EMAIL_PORT = 2525
- EMAIL_FROM = email from which you want to send messanges to website user

##### To run the app use `npm run dev`

#### Things I learned during that project

Creating this website did not take me that much time like previous projects, thats because I already become familiar with MERN Stack and writing code was way faster.
On that project i really noticed the diffrence in efficiency in transforming my idea into real examples, both on server and client side.

List of things i learned during development:

- Working with Stripe
- Working with selectors
- Translating websites with react-intl
