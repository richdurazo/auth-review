# Boilerplate Authentication Server using bcrypt, passport, and jwt

This is a review of setting up simple authentication and route protection using passport jwt strategy. This is a secure api server that can be used for both web and mobile applications.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine. 

```
> git clone https://github.com/richdurazo/auth-review
> cd auth-review
> npm install
> npm run dev
```

### Prerequisites

This project uses Javascript, Node, Express, Mongodb, Mongoose

## Built With

* [jwt](https://jwt.io/) - JSON Web Tokens
* [jwt-simple](https://www.npmjs.com/package/jwt-simple/tutorial) - JSON Web Token encode and decode module
* [bcrypt](https://www.npmjs.com/package/bcrypt) - Used to generate a salt and hash the user password
* [passport](http://passportjs.org/) - authentication middleware for Node.js.

### Authentication flows

```
> Sign up --> Validate email and password are not in use --> send token
> Sign in --> Verify their email and pw are correct using Local Strategy --> send token
> Authenticated request --> Validate token using JWT strategy --> give them access to protected resource
```

## bcryt break down

### saving a pw

```
> using bcrypt we create a salt (encryption key)
> took a password and encrypted it using a hased pasword
> then we saved the salt and the hashed password to database (mongodb)
```

### comparing the user login pw to our db (user sign in)

```
> pull just the salt from the db
> use the salt (encryption key) to encrypt the user submitted pw
> compare the newly hashed password to the hashed password in our db
```
## Acknowledgments
* **Stephen Grider** and his amazing tutorials on [Udemy](https://www.udemy.com/react-redux-tutorial/) - Advanced React and Redux
