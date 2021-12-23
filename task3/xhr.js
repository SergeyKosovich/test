const requestURL = 'https://jsonplaceholder.typicode.com/posts';
const requestURL2 = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };

    xhr.send();
  });
}
const response1 = sendRequest('GET', requestURL);
const response2 = sendRequest('GET', requestURL2);

Promise.all([response1, response2])
  .then((data) => {
    console.log('оба ответа получены:', data);
  })
  .catch((err) => console.log(err));
