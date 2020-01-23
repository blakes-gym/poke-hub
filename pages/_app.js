import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import Template from '../components/Template'

import withData from '../graphql/config'

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props
    return (
      <ApolloProvider client={apollo}>
        <Template>
          <Component {...pageProps} />
        </Template>
      </ApolloProvider>
    )
  }
}

export default withData(MyApp)
