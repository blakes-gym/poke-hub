const initial = false

export default (state = initial, { type, payload }) =>
  ({
    READ: payload
  }[type] || state)
