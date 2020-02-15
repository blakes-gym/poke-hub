// import React from 'react'
// import { connect } from 'react-redux'
// import { startClock, serverRenderClock } from '../store'
// import Examples from '../components/examples'

export default function Index() {
  return <div></div>
}

// class Index extends React.Component {
//   static getInitialProps({ reduxStore, req }) {
//     const isServer = !!req
//     reduxStore.dispatch(serverRenderClock(isServer))

//     return { redux: '' }
//   }

//   componentDidMount() {
//     const { dispatch } = this.props
//     this.timer = startClock(dispatch)
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }

//   render() {
//     return <Examples />
//   }
// }

// export default connect()(Index)
