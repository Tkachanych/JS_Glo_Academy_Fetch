const file = './db/db.json';
const site = 'https://jsonplaceholder.typicode.com/posts';
const headers = { 'Content-type': 'application/json; charset=UTF-8' };

const sendData = (site, data, headers) => {
  console.log(data);
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
