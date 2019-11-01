# ![Logo](https://i.imgur.com/RiQUMyF.png) 

An E-commerce web application for selling men's suits and accessories. This project is created with the MERN (MongoDB, Express, React, Node) stack for Holberton School's 1st Year Foundations final project.

Landing page: [here](https://tuvo.dev/banksy_trading_co/)
## Table of contents

- [Motivations](#motivations)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)
- [Contact](#contact)

## Motivations

- Solve a modern business problem
  - E-commerce
- Dive deep into JS and ES2015+ features
  - Promises
  - Currying
  - Scope/Closures
  - Async / Await
  - Generators

## Screenshots

<p align="center">Front Page</p>

![Front Page](https://i.imgur.com/Ua8BbVE.png)

<p align="center">Shop Page</p>

![Shop Page](https://i.imgur.com/8AqKYjJ.jpg)

## Technologies

### Architecture

![Tech Stack](https://i.imgur.com/O2kRTzS.png)

### Libraries and tools

![Libraries and tools](https://i.imgur.com/0ed17Ix.png)

### GraphQL

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools. 

We used it as an API to fetch data from our database, which has given us performance benefits.

You can play with GraphQL on the playground [here](https://banksyco.tk/)

Here is how playground looks like with `query` example:

![GQL Playground Example](https://i.imgur.com/zCnBdQ8.png)

## Setup

```
npm install
npm run launch
```
### Building
Build script will create a `build` directory with a compiled JavaScript code which will be compatible with most modern browsers. We are using `create-react-app` as a strating point in our app, which under the hood uses `babel` as a compiler.

```
npm run build
```

### Testing
As a testing frameworking we are uisng `Jest`. Just run `test` script to run tests
```
npm run test
```


## Code Examples

All components are functional and written in Typescript:

```javascript
interface CartIconProps {
  toggleCartHidden: (event: any) => void
  itemCount: number
}

export const CartIcon = ({
  toggleCartHidden,
  itemCount
}: CartIconProps): JSX.Element => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'></ShoppingIcon>
    <span className='item-count'>{itemCount}</span>
  </div>
)
```

## Features

- Users can be authenticated using Google Sign-In or by creating a new account
- Cart data persists throughout browser sessions using localStorage
- Payments are handled via external Stripe API
- Clothing/accessory models are stored in Mongo and retrieved dynamically

Considerations for improvement: 

- Expand inventory models with options for stock quantity, size, alt angles
- Save cart persistence on database for logged in users
- Better pop-up messages for error handling

## Status

Project is deployed on Heroku!

[Banksy-Trading-Co](https://banksy-trading-co.herokuapp.com)

## Inspiration

Andrei Neagoie and Yihua Zhang's Intro to React course on [Udemy](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/)

## Contact

Created by:

- [Tu Vo](https://github.com/tuvo1106)
- [Farrukh Ahkrarov](https://github.com/narnat)
