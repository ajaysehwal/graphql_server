import React from 'react'
import { useQuery, gql } from '@apollo/client';

const query =gql`
query AnyName{
  getTodos {
    id
     title
    completed
    user {
      name
      email
      username
    }
  }
}
`
export default function Home() {
  const {data,loading}=useQuery(query);
  if(loading)return <h1>Loading....</h1>
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}
