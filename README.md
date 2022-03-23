# fullStackBankingApplication
This application allows users to create an account at an online bank where they can deposit and withdraw funds, as well as review previous transactions. There exists an admin side of the application that allows the bank to review all transactions. 
## Installation Guidelines
Clone files to your local machine under one folder. Open a terminal window at the folder, run 'npm install', and 'node index.js'

<img width="760" alt="BadBank_GH" src="https://user-images.githubusercontent.com/93945214/159607949-0c433114-a03a-4f7c-8b1b-949a5f40e043.png">


## Technology Used
This project was created as a 3 tier application. On the Browser Client side it incorporates React and firebase to complete the UI and authentication on the front end. The HTTP Server side incorporates express, node, and firebase to secure the back end and communicate with a mongoDB data store running in a docker container. 
## Features
User authentication and authorization to deposit, withdraw, and view previous transactions. 
Admin authentication and authorization to view user accounts and balances, as well as overall banking transactions.
## License
A Project created for Full Stack Web Development with MIT
