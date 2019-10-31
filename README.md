# ![Logo](https://i.imgur.com/RiQUMyF.png) 

An E-commerce web application for selling men's suits and accessories. This project is created with the MERN (MongoDB, Express, React, Node) stack for Holberton School's 1st Year Foundations final project.

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

![Front Page](https://i.imgur.com/ixVwWeg.png)

<p align="center">Shop Page</p>

![Shop Page](https://i.imgur.com/ooQeDNb.jpg)

## Technologies

![Tech Stack](https://i.imgur.com/O2kRTzS.png)

### GraphQL



## Setup

```
npm install
npm run launch
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

Andrei Neagoie and Yihua Zhang's Intro to React course on Udemy

## Contact

Created by:

- [Tu Vo](https://github.com/tuvo1106)
- [Farrukh Ahkrarov](https://github.com/narnat)
