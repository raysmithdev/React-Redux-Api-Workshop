import fetch from 'isomorphic-fetch'

const recieveData = (users) => {
  return {
    type: 'RECIEVE_DATA',
    users
  }
}

export const fetchDataFromApi = () => {
  return dispatch => {
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(data => dispatch(recieveData(data.results)))
  }
}
