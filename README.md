# E-Commerce with Payload CMS

## Quick Start

To spin up this example locally, follow these steps:

### Getting Started to run the project locally

`git clone https://github.com/howardsolutions/ecom-cms.git`

`cd ecom-cms && cp .env.example .env` to copy the example environment variables

`npm install` 

`npm run build` then `npm run serve` 

Navigate to `http://localhost:3000` to see the result (Recommended)

`npm run dev` - to run the project in development mode.

You can start editing the page by modifying src/app/page.tsx. The page auto-updates as you edit the file.

### Testing Account to login to the Application

In order to perform actions like add to cart, purchase the product with Credit Card, View all of your order, and user information, you must register an account. 

But for testing purposes, please use this account

`Account: test@email.com`
`password: test123`

### CMS management: To add more product to product list, change product details, price, ... add product categories, changing footer, header information,...

Please Navigate to `http://localhost:3000/admin`

And use the admin account I already provided

### Fake credit card to purchase product during checkout process

`Card Number: 4242 4242 4242 4242`

with Any date in the future, and random CVC, you're good to go.

### 

### TechStack

Frontend: NextJS, ReactJS, SCSS, Prebuilt Ecommerce components from `PayloadCMS` 

Backend: Built-in Express server

CMS: Payload CMS

Database: MongoDB

### 🤯 There're a few problems, ideas and considerations

- Since there's a challenge project with a very time constraint, implementing CI CD will not be my priority, we can absolutely go crazy with it by create a github workflows to checking for linting, formating, testing condition for every changes we made before merging to the `master` branch, and check the same before deploy the code to production

- It's my first time building application with CMS ever, therefore I'm still not figure out what's the problem with the Deployment process of PayloadCMS. 
I've tried many ways + upload images to S3 bucket, deploy the project to payload CMS cloud server, but it failed many times and I got out of time.