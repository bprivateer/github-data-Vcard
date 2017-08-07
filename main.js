
let container =document.getElementById('container');


let name = "Bernadette Privateer";
let bio = "Bio";

container.innerHTML += `<h1>${name}</h1>`

function reqListener(){
  let data = JSON.parse(this.responseText);



container.innerHTML += `<li>${data.name}</li>`;
container.innerHTML += `<li><a href="${data.html_url}">${data.html_url}</a></li>`;
container.innerHTML += `<li>${data.email}</li>`;
container.innerHTML += `<li>${data.company}</li>`;
container.innerHTML += `<li><a href="${data.blog}">${data.blog}</a></li>`;


container.innerHTML +=`<h3>${bio}</h3> <p>${data.bio} <span><img src="${data.avatar_url}"></span></p>`;

// container.innerHTML += `<span><img src="${data.avatar_url}"></span>`;

  console.log(data);
  console.log(data.name);
}

let req = new XMLHttpRequest();
req.open ("GET", "https://api.github.com/users/bprivateer");
req.addEventListener("load", reqListener);
req.send();
