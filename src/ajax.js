

new Promise((resolve, reject) => {
  const xmlHttpRequest = new XMLHttpRequest();

  xmlHttpRequest.onreadystatechange = () => {
    if (xmlHttpRequest.readyState === 4) {
      if (xmlHttpRequest.status === 200) {
        resolve(xmlHttpRequest.text);
      } else {
        reject(xmlHttpRequest);
      }
    }
  };

  xmlHttpRequest.open('GET', 'localhost:8080/1');
  xmlHttpRequest.send(null);
}).then((text) => {
  const { id, price } = JSON.parse(text);
  console.log(id);
  console.log(price);
  return id;
}).catch((reason) => {
  console.log(reason.status);
});
