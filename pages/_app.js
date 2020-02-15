import App from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import Template from '../components/Template'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <Template>
          <Component {...pageProps} />
        </Template>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)
