// Add your code here
const user = {
    name: "Steve",
    email: "steve@steve.com",
  };
  
  const userData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  };
  
  function submitData() {
    return fetch("http://localhost:3000/users", userData)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        steveOnDOM(obj);
      })
      .catch((err) => {
        alertMsg(err);
      });
  }
  
  function steveOnDOM(obj) {
    console.log(obj);
    let p = document.createElement("p");
    p.innerHTML = `User: ${obj.name} | Email: ${obj.email} | Id: ${obj.id}`;
    document.body.appendChild(p);
  }
  
  function alertMsg(err) {
    let h1 = document.createElement("h1");
    h1.innerHTML = `${err}`;
    document.body.appendChild(h1);
  }