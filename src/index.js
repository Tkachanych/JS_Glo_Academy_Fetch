const file = './db/db.json';
const site = 'https://jsonplaceholder.typicode.com/posts';
const headers = { 'Content-type': 'application/json; charset=UTF-8' };

const sendData = (site, data, headers) => {
  fetch(site, {
    method: 'POST',
    body: JSON.stringify(data),
    headers,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
};

const getData = (source) => {
  fetch(source)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => sendData(site, data, headers))
    .catch((err) => console.log(err));
};

getData(file);
