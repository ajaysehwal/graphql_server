const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const axios=require('axios');
const {ApolloServer}=require('@apollo/server');
const {expressMiddleware}=require('@apollo/server/express4');
 const {Todes} = require('./Todos')
 const {Users} = require('./Users')


async function StartServer(){
    const app=express();
   const server =new ApolloServer({
    typeDefs:`
    type User{
        id:ID!
        name:String!
        username:String!
        email:String!
        phone:String!
        website:String
    }
      type Todo{
        id:ID!
        title:String!
        completed:Boolean
        user:User
      }
      type Query{
        getTodos:[Todo]
        getUsers:[User]
        getUser(id:ID!):User
      }
    `,
    resolvers:{
        Todo:{
           user:(todo)=>
           Users.find(e=>e.id===todo.id),
        },
        Query:{
            getTodos:()=>Todes,
            getUsers:()=>Users,
            getUser:async(parent,{id})=>Users.find(e=>e.id===id),
        },
    },
   });
   app.use(bodyParser.json());
   app.use(cors());
   await server.start();
   app.use('/',expressMiddleware(server));
    app.listen(8000,()=>console.log("Server Running on 8000 Port"));
}
StartServer();