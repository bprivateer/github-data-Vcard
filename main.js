
let container =document.getElementById('container');

//
let data =
  {
login: "bprivateer",
id: 26254387,
avatar_url: "https://avatars0.githubusercontent.com/u/26254387?v=4",
gravatar_id: "",
url: "https://api.github.com/users/bprivateer",
avatar_url:"https://avatars0.githubusercontent.com/u/26254387?v=4",
bio:"Hello!  My name is Bernadette Privateer.  I am located in the Atlanta area and am currently a student at The Iron Yard, a programming bootcamp.",
blog:"www.bprivateer.github.io",
company:"The Iron Yard",
created_at:"2017-03-07T15:33:51Z",
email:null,
events_url:"https://api.github.com/users/bprivateer/events",
followers:2,
followers_url:"https://api.github.com/users/bprivateer/followers",
following:0,
following_url:"https://api.github.com/users/bprivateer/following",
gists_url:"https://api.github.com/users/bprivateer/gists",
gravatar_id:"",
hireable:true,
html_url:"https://github.com/bprivateer",
id:26254387,
location:"Atlanta",
login:"bprivateer",
name:"bernadette privateer",
organizations_url:"https://api.github.com/users/bprivateer/orgs",
public_gists:0,
public_repos:21,
received_events_url:"https://api.github.com/users/bprivateer/received_events",
repos_url:"https://api.github.com/users/bprivateer/repos",
site_admin:false,
starred_url:"https://api.github.com/users/bprivateer/starred",
subscriptions_url:"https://api.github.com/users/bprivateer/subscriptions",
type:"User",
updated_at:"2017-08-07T17:34:40Z",
url:"https://api.github.com/users/bprivateer",
}



let name = "Bernadette Privateer";
let bio = "Bio";
let myInfo = "Some information";
container.innerHTML += `<h1>${name}</h1>`

function reqListener(){
  // let data = JSON.parse(this.responseText);


container.innerHTML += `<span><ul><li><b>${myInfo}</b></li>`
container.innerHTML += `<li>${data.name}</li>`;
container.innerHTML += `<li><a href="${data.html_url}">${data.html_url}</a></li>`;
container.innerHTML += `<li>${data.email}</li>`;
container.innerHTML += `<li>${data.company}</li>`;
container.innerHTML += `<li><a href="${data.blog}">${data.blog}</a></li></ul>`;


container.innerHTML +=`<h3>${bio}</h3> <p>${data.bio} <span><img src="${data.avatar_url}"></span></p></span>`;

// container.innerHTML += `<span><img src="${data.avatar_url}"></span>`;

  // console.log(data);
  // console.log(data.name);
}
console.log(data);
console.log(data.name);
reqListener();
// let req = new XMLHttpRequest();
// req.open ("GET", "https://api.github.com/users/bprivateer");
// req.addEventListener("load", reqListener);
// req.send();
