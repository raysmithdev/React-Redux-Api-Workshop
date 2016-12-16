const users = (state = [], action) => {
  switch (action.type) {
    case 'RECIEVE_DATA':
    return [
      ...action.users
    ]
    default:
      return state
  }
}

export default users
