const initial = 'YOYOYOYOYOYO'

export default (state = initial, { type, payload }) =>
  ({
    TEST1: payload,
    TEST2: payload
  }[type] || state)
