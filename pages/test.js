// import React from 'react'
import { test1, test2, read } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'

export default function Test() {
  const test = useSelector(({ test }) => test)
  const book = useSelector(({ book }) => book)
  const dispatch = useDispatch()
  const change = () => dispatch(test1())
  const readIt = () => dispatch(read())

  return (
    <div>
      <div>{test}</div>
      <div>{book ? 'TRUE' : 'FALSE'}</div>
      <button onClick={change}>TEEEEEST2</button>
      <button onClick={readIt}>READ</button>
    </div>
  )
}

Test.getInitialProps = async ({ reduxStore }) => {
  // await new Promise(resolve => setTimeout(() => resolve(), 5000))
  reduxStore.dispatch(test2('NYAAAAOIIO'))
  return { redux: '' }
}
