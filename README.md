# Node Express Course

In this course we will learn how to create backend, server applications, using **Node** with **Express**.
We will connect our application to a database and build **REST** and **GraphQL** servers that can respond to client requests.
The course has great focus on practical, day to day problems while writing your backend application, and the main focus is for you to be able to be productive and create amazing backend applications right after this course.

## About the course

During the course you will have theoretical explanations, code examples, and student ex.
All the code example from the lessons will be available in this repo for you to download.

## About me

My name is Yariv Katz.
[Link to my LinkedIn](https://il.linkedin.com/in/yariv-katz "LinkedIn")
FullStack expert.
Was CTO of 2 startup companies in the past
manage large FullStack projects and large teams.
Today founder of Nerdeez Consulting.

## Whatsapp support group

To answer my students questions, give support after and during the course, and publish my videos, I opened the following WhatsApp Group:
https://chat.whatsapp.com/EqIl3DtpQG27SAET5NcmtB

## Youtube channel

Must of the lectures in this course are also available in video which I recorded for my students.
Link to my channel:
https://www.youtube.com/channel/UCpKpEKABqCHltmcElJVwjSw

## Course Plan

### NodeJS Introduction and some basic JS

In this lesson we will start to dive in to node.
write our first node code.
learn how to debug our code
recap on a little bit of js.

This lecture is also available on video in the following URL:
https://youtu.be/Cm02C7-YErk

In this lecture we will cover the following topics:
- What is Node
- Hello World
- About JS
- Event driven and async code
- Javascript single threaded?
- Node structure
- REPL
- Debugging our Node application
- JS Recap:
  - Variable declaration
  - Exceptions
  - ES6 OOP
  - Promises and async await
  - Closure

### Modules

When creating our backend applications, splitting our project to multiple files is essential.
In this lesson we will learn how to do that with node.
We will also learn how to use community packages.

We will learn the following:
- What is a module
- What is a package
- creating our first module and using our module
- What is NPM
- Installing community package
- Publishing a package and package version managment
- How Node is looking for a package
- Module function
- NPX

### Built-In Modules

Node ships with some builtin modules that we can use without the need to install them with NPM.
In this lesson we will learn about those modules and some globals we can use

- global
- EventEmitter
- process
- fs and error first callback
- path
- promisify
- callbackify

### Express introduction

In this lesson we will learn how to build our server using ExpressJS framework.
We will cover the following:

- What is ExpressJS
- Express architecture
- Application
- Middleware
- Error handling
- Router
- Views
- Express Generator
- Recap on REST Server

### Student EX.

In this lesson we will create our first REST server.
Create the following:
- New express application using **Express Generator**
- Model representing a **User** which will have the following fields:
  - id: number
  - firstName: string
  - lastName: string
- Service **UserService** that will manage an array of **User[]** and will have the following methods:
  - getUsers: () => User[]
  - getUser: (id: number) => User
  - addUser: (user: User) => User
  - updateUser: (user: Partial<User>) => User
  - deleteUser: (id: number) => void
- Create a Router for a user REST api
- create CRUD REST api for the UserService

### Express Advanced

In this lesson we will learn how to solve problems you will stumble on when working on your server application.

We will cover the following:
- Common way to solve problems
- express.static
- body
- cookies
- session
- authentication
- JWT
- CORS
- CSRF

### Working with database

In this lesson we will combine our express application with database and start working with a database using Sequelize ORM.

We will cover the following:
