const user = {
  name: "Steve",
  email: "steve@steve.com",
};

const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(user),
};

function submitData() {
  return fetch("http://localhost:3000/users", config)
    .then((resp) => {
      return resp.json();
    })
    .then((object) => {
      userOnTheDOM(object);
    })
    .catch((error) => {
      alertMsg(error);
    });
}

function userOnTheDOM(object) {
  console.log(object);
  let p = document.createElement("p");
  p.innerHTML = `User: ${object.name} | Email: ${object.email} | Id: ${object.id}`;
  document.body.appendChild(p);
}

function alertMsg(error) {
  let h1 = document.createElement("h1");
  h1.innerHTML = `${error}`;
  document.body.appendChild(h1);
}