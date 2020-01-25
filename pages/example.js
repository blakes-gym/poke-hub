import React from 'react'
import Head from 'next/head'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const EXAMPLE_QUERY = gql`
  {
    popular_artists {
      artists {
        name
      }
    }
  }
`

export default function Example({ shows }) {
  const { data, loading, error } = useQuery(EXAMPLE_QUERY)
  data && console.log('graphql', data)
  console.log('initial props', shows)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>
  }
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      HEYOOOOO!
    </div>
  )
}

Example.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  return {
    shows: data
  }
}
