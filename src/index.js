const file = './db/db.json';
const site = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (site, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', site, true);
  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
  xhr.send(JSON.stringify(data));

  xhr.onerror = function () {
    console.log('Запрос не удался');
  };

  xhr.onload = function () {
    if (xhr.status >= 400 || xhr.status === 0) {
      console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
      return;
    }
    console.log(JSON.parse(xhr.response));
  };
};

const getData = (source) => {
  fetch(source)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => sendData(site, data))
    .catch((err) => console.log(err));
};

getData(file);
