import React from 'react'
import App from 'next/app'
import Template from '../components/Template'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Template>
        <Component {...pageProps} />
      </Template>
    )
  }
}

export default withData(MyApp)
