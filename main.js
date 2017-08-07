let container =document.querySelector("container");

function reqListener(){
  let data = JSON.parse(this.responseText);

container.innerHTML += <li>${data.name}</li>
container.innerHTML += <li>${data.html_url}</li>
container.innerHTML += <li>${data.email}</li>
container.innerHTML += <li>${data.company}</li>
container.innerHTML += <li>${data.}</li>

  console.log(data);
  console.log(data.name);
}

let req = new XMLHttpRequest;
req.open ("GET", "https://api.github.com/users/bprivateer");
req.addEventListener("load", reqListener);
req.send();
